import React from 'react';
import styled from 'styled-components';
import UserContainer from '../Components/Container/UserContainer';
import TodoContainer from '../Components/Container/TodoContainer';
import CounterContainer from '../Components/Container/CounterContainer';

const MainContainer = styled.div`
    display: flex;
    `

const Main = () => {
    return (
        <div>
            <MainContainer>
                <UserContainer />
                <TodoContainer />
            </MainContainer>
            <CounterContainer />
        </div>
    )
}

export default Main;
