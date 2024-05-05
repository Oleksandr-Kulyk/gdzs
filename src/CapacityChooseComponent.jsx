import styled from "styled-components"
import ButtonComponent from "./ButtonComponent"

const CapacityChooseComponent  = ({showPersonForm}) => {

    const CapacityChoose = styled.div`
    width: 100%;
    height: 100%;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    `

    return (
        <CapacityChoose>
            <ButtonComponent text='Почати' type='button' onClick={showPersonForm} />
        </CapacityChoose>
    )
    
}

export default CapacityChooseComponent