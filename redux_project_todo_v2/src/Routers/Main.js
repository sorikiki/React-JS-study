import React from 'react';
import styled from 'styled-components';
import UserContainer from '../Components/Container/UserContainer';
import TodoContainer from '../Components/Container/TodoContainer';
import CounterContainer from '../Components/Container/CounterContainer';
import PostListPage from './PostList';
import PostItemPage from './PostItem';

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
            </MainContainer>
        </div>
    )
}

export default Main;
