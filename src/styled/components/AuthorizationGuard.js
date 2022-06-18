import { Navigate } from "react-router-dom";

export const AuthorizationGuard = ({
  user,
  redirectPath = "/list",
  children,
}) => {
  if (user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};