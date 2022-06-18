import { VerificationPage } from "./styled/components/VerificationPage";
import { Wrapper } from "./styled/components/Wrapper";
import { useNavigate } from "react-router-dom";
import { registerUser } from "./database";
import { useState } from "react";

function RegisterUser({setUser}){
    const navigate = useNavigate();
    
    const [form, setForm] = useState({email:"", pass:"", confirmpass:""});

    const onChange=(event)=>{
        const {name, value} = event.target;
        setForm (p=>({...p,[name]:value}));
    }

    const onSubmit=(event)=>{
        event.preventDefault();
        if(form.pass==form.confirmpass){
            registerUser({
                email:form.email,
                password:form.pass
            })
            localStorage.setItem("user", JSON.stringify(form));
            setUser({
                email:form.email,
                password:form.pass
            });
            navigate("/list");
            
        }
    }

    return(
        <Wrapper>
            <VerificationPage>
            <h3>Register as Customer</h3>
                <input name="email" onChange={onChange} value={form.email} placeholder="Email" type="text"/>
                <input name="pass" onChange={onChange} value={form.pass} placeholder="Password" type="password"/>
                <input name="confirmpass" onChange={onChange} value={form.confirmpass} placeholder="Confirm Password" type="password"/>
                <button onClick={onSubmit}>Register</button>
            </VerificationPage>
        </Wrapper>
    )
}

export default RegisterUser;