import React from 'react';
import styled from 'styled-components';
import UserContainer from '../Components/Container/UserContainer';
import TodoContainer from '../Components/Container/TodoContainer';
import CounterContainer from '../Components/Container/CounterContainer';
import PostListContainer from '../Components/Container/PostListContainer';

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
            <MainContainer>
                <CounterContainer />
                <PostListContainer />
            </MainContainer>
        </div>
    )
}

export default Main;
