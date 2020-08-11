import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { signUp, logInLoading, logOutLoading } from '../../Modules/user';
import SignUp from '../User/SignUp';
import SignIn from '../User/SignIn';
import MyPage from '../User/MyPage';
import SignOut from '../User/SignOut';

const ContainerStyle = styled.div`
    display: flex;
    width: 66%; 
    justify-content: space-around;
    `

const UserContainer = ({
    id,
    isLoggedIn,
    signUp,
    logInLoading,
    logOutLoading
}) => 
    isLoggedIn? 
    <ContainerStyle>
        <MyPage id={id} />
        <SignOut logOutLoading={logOutLoading} />
    </ContainerStyle>:
    <ContainerStyle>
        <SignUp onRegisterUser={signUp} />
        <SignIn logInLoading={logInLoading} />
    </ContainerStyle>


export default connect(
    ({ user }) => ({
        id: user.user.id,
        isLoggedIn: user.isLoggedIn
    }),
    {
        signUp,
        logInLoading,
        logOutLoading
    }
)(UserContainer);