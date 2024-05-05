import styled from "styled-components"
import ButtonComponent from "./ButtonComponent";

const PersonFormComponent = ({showCapacityChoose, showTimerComponent}) => {
    const PersonForm = styled.div`
    width: 100%;
    height: 100%;
    background-color: green;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `;

    const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    `

    return (
        <PersonForm>
            <ButtonsWrapper>
            <ButtonComponent type={'button'} text={'Назад'} onClick={showCapacityChoose} />
            <ButtonComponent type={'button'} text={'Сформувати ланку'} onClick={showTimerComponent} />
            </ButtonsWrapper>
        </PersonForm>
    )
}

export default PersonFormComponent