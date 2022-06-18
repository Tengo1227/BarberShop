import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "./database";
import { VerificationPage } from "./styled/components/VerificationPage";
import { Wrapper } from "./styled/components/Wrapper";

function LoginPage({setUser}){
    const navigate = useNavigate();

    const [form, setForm] = useState({email:"", pass:""});

    const onChange=(event)=>{
        const {name, value} = event.target;
        setForm (p=>({...p,[name]:value}));
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        const user = loginUser(form)
        if(user){
            localStorage.setItem("user", JSON.stringify(form));
            setUser(user);
            navigate("/list");
        }
    }
    return(
        <Wrapper>
            <VerificationPage>
                <h3>Login</h3>
                <input name="email" value={form.email} onChange={onChange} placeholder="email" type="text"/>
                <input name="pass" value={form.pass} onChange={onChange} placeholder="password" type="password"/>
                <button onClick={handleSubmit}>Submit</button>
            </VerificationPage>
        </Wrapper>
    )
}

export default LoginPage;