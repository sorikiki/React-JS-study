import React from 'react';
import styled from 'styled-components';
import MyPage from '../Components/LogIn/MyPage';
import SignOut from '../Components/LogIn/SignOut';
import Todo from '../Components/Todo';

const LogInPageContainer = styled.div`
    display: flex;
    `

const LogInPage = () => {
    return (
        <LogInPageContainer>
            <MyPage />
            <SignOut />
            <Todo />
        </LogInPageContainer>
    )
}

export default LogInPage;