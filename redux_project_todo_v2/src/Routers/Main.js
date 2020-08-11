import React from 'react';
import styled from 'styled-components';
import UserContainer from '../Components/Container/UserContainer';
import TodoContainer from '../Components/Container/TodoContainer';

const MainContainer = styled.div`
    display: flex;
    `

const Main = () => {
    return (
        <MainContainer>
            <UserContainer />
            <TodoContainer />
        </MainContainer>
    )
}

export default Main;
