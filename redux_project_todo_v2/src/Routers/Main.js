import React from 'react';
import styled from 'styled-components';
import UserContainer from '../Components/User/UserContainer';
import TodoContainer from '../Components/Todo/TodoContainer';

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
