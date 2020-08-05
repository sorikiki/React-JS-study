import React from 'react';
import styled from 'styled-components';
import SignUp from '../Components/SignUp';
import SignIn from '../Components/SignIn';
import Todo from '../Components/Todo';

const MainPageContainer = styled.div`
    display: flex;
    `

const MainPage = () => {
    return (
        <MainPageContainer>
            <SignUp />
            <SignIn />
            <Todo />
        </MainPageContainer>
    )
}

export default MainPage;
