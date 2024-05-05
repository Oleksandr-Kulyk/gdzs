import styled from "styled-components"
import ButtonComponent from "./ButtonComponent"

const TimerComponent = ({showPersonForm}) => {

    const TimerContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: yellow;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `
    const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    `

    return (
        <TimerContainer>
            <ButtonsWrapper>
            <ButtonComponent type={'button'} text={'Назад'} onClick={showPersonForm} />
            <ButtonComponent type={'button'} text={'Почати'} />
            </ButtonsWrapper>
        </TimerContainer>
    )
}

export default TimerComponent