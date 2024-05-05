import styled from "styled-components"
import CapacityChooseComponent from "./CapacityChooseComponent"
import { useState } from "react"
import PersonFormComponent from "./PersonFormComponent"

const AppContainer = () => {
    const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `

    const [capacityChooseShown, setCapacityChooseShown] = useState(true);
    const [personFormShown, setpersonFormShown] = useState(false);

    const showCapacityChoose = () => {
        setpersonFormShown(false);
        setCapacityChooseShown(true);
    }

    const showPersonForm = () => {
        setCapacityChooseShown(false);
        setpersonFormShown(true);
    }


    return (
        <Wrapper>
           {capacityChooseShown && <CapacityChooseComponent showPersonForm={showPersonForm} />}
           {personFormShown && <PersonFormComponent showCapacityChoose={showCapacityChoose} />}
        </Wrapper>
    )
}

export default AppContainer