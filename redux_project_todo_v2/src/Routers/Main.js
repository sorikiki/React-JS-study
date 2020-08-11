import React from 'react';
import styled from 'styled-components';
import TodoContainer from '../Components/Todo/TodoContainer';

const MainContainer = styled.div`
    display: flex;
    `

const Main = () => {
    return (
        <MainContainer>
            <TodoContainer />
        </MainContainer>
    )
}

export default Main;
