import styled from "styled-components"

export const VerificationPage = styled.div`
    width: 500px;
    height: 310px;
    background-color: #3E3E3ECC;
    border: 5px solid #0070D8;
    border-radius: 2%;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    padding: 3px;
    row-gap: 2px;

    h3 {
        font-size: 30px;
    }
    
    input{
        width: 70%;
        padding: 5px;
        border-radius: 5px;


    }

    button {
        width: 70%;
        padding: 5px;
        border-radius: 2px;
        background-color: #0070F8;
        font-size: 15px;
    }
`