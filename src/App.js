import './App.css';
import './styled/components/Navbar';
import { Navbar } from './styled/components/Navbar';
import { Barber } from './styled/components/Barber';
import {Wrapper } from './styled/components/Wrapper';
import { barberList } from './database';
import LoginPage from './LoginPage';
import RegisterUser from './RegisterUser';
import RegisterBarber from './RegisterBarber';
import BarberList from './BarberList'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import { AuthorizationGuard } from './styled/components/AuthorizationGuard';
import { useState } from 'react';

function App() {
  const handleSignOut=()=>{
    setUser(null);
  }

  const [user, setUser]=useState(JSON.parse(localStorage.getItem("user")));

  const styleForLink= {
    textDecoration: "none",
    color: 'black'
  };
  return (
    <div className="App">
      <BrowserRouter>

      <Navbar>
        <h1>BarberShop</h1>
        {
          !user?
           <ul>
          <li><Link style={styleForLink} to="regBarber">Register as Barber</Link></li>
          <li><Link style={styleForLink} to="regUser">Register as Customer</Link></li>
          <li><Link style={styleForLink} to="login">Login</Link></li>
        </ul>:
        <ul>
          <li onClick={handleSignOut}>Sign out</li>
          <li>{user.email}</li>
        </ul>
        }

       
      </Navbar>
      <Wrapper>
          <Routes>
            <Route path='*' element={<Navigate to="/list"/>} />
            <Route path="/login" element={
            <AuthorizationGuard user={user}>
              <LoginPage setUser={setUser}/>
            </AuthorizationGuard>
            
            }> </Route>

            <Route path="/regUser" element={
              <AuthorizationGuard user={user}>
                <RegisterUser setUser={setUser}/>
              </AuthorizationGuard>
            }> </Route>

            <Route path="/regBarber" element={
              <AuthorizationGuard user={user}>
                <RegisterBarber setUser={setUser}/>
              </AuthorizationGuard>
            }></Route>
            <Route path="/list" element={<BarberList />}></Route>
          </Routes>

      </Wrapper>
      </BrowserRouter>
        
      


    </div>
  );
}

export default App;
