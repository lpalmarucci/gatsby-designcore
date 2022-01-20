import styled from "styled-components";

export default styled.button`
    border: none;
    padding: 10px 40px;
    color: white;
    font-size: 20px;
    border-radius: 20px;
    background: linear-gradient(90deg, #4B26FF 0%, #B01EFF 100%);
    cursor: pointer;
    margin: 20px;
    border: 1px solid #fff;
    transition: all 1s cubic-bezier(0.2,0.8,0.2,1);

    &:hover{
        border: 1px solid rgba(0,0,0,0.2);
        box-shadow: 0 10px 10px rgba(0,0,0,0.1);
        padding: 20px 50px;
        text-decoration: underline;
        transform: translateY(-10px);
    }
`