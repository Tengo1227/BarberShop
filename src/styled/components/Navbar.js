import styled from "styled-components"

export const Navbar = styled.div`
    width: 100%;
    padding: 20px 10px;
    background-color: #553F2A60;
    
    h1 {
        display: inline;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        text-shadow: 1px 1px yellowgreen;
    }

    ul {
        font-size: 25px;
        font-family: fantasy;
        margin-top: 5px;
        display: inline-flex;
        list-style: none;
        float: right;
        justify-content: center;
        align-items: center;
        column-gap: 15px;
    }

    li {
        border-left: 5px solid;
        background:linear-gradient(90deg, #FF3F2A 0%, #ddd10100 95%);
    }
`
