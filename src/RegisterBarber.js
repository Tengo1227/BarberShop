import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerBarber } from "./database";
import { VerificationPage } from "./styled/components/VerificationPage";
import { Wrapper } from "./styled/components/Wrapper";

function RegisterBarber(){
    const navigate = useNavigate();

    const [form, setForm] = useState({firstName:"", lastName:"", email:"", address:"", price:""})
    
    const onChange=(event)=>{
        const {name, value} = event.target;
        setForm (p=>({...p,[name]:value}));
    }

    const onSubmit=(event)=>{
        event.preventDefault();
        registerBarber({
            firstName:form.firstName,
            lastName:form.lastName,
            email:form.email,
            address:form.address,
            price:form.price
        })
        navigate("/list");
    }

    return(
        <Wrapper>
            <VerificationPage>
            <h3>Register as Barber</h3>
                <input name="firstName" onChange={onChange} value={form.firstName} placeholder="First Name" type="text"/>
                <input name="lastName" onChange={onChange} value={form.lastName} placeholder="Last Name" type="text"/>
                <input name="email" onChange={onChange} value={form.email} placeholder="Email" type="text"/>
                <input name="address" onChange={onChange} value={form.address} placeholder="Address" type="text"/>
                <input name="price" onChange={onChange} value={form.price} placeholder="Price (in GEL)" type="text"/>
                <button onClick={onSubmit}>Register</button>
            </VerificationPage>
        </Wrapper>
    )
    }

export default RegisterBarber;