import styled from "styled-components"

const ButtonComponent = ({text, type, onClick}) => {
    const Button = styled.button`
    display: block;
    background-color: aqua;
    padding: 10px 15px;
    color: white;
    border: none;
    font-size: 20px;
    border-radius: 15px;
    box-shadow: 5px 5px 7px 0px rgba(0,0,0,0.3);
    `
    return <Button type = {type} onClick={onClick}>{text}</Button>
}

export default ButtonComponent