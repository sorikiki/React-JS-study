import React from 'react';
import { connect } from 'react-redux';
import { signUp, logInLoading, logOutLoading } from '../../Modules/user';
import SignUp from './SignUp';
import SignIn from './SignIn';

const UserContainer = ({
    isLoggedIn,
    signUp,
    logInLoading,
    logOutLoading
}) => isLoggedIn? 
    <h1>loggedIn</h1>:
    <div style= {{ 
        display: 'flex', 
        width: 66 + '%', 
        justifyContent: 'space-around'
        }}>
        <SignUp onRegisterUser={signUp} />
        <SignIn logInLoading={logInLoading} />
    </div>


export default connect(
    ({ user }) => ({
        isLoggedIn: user.isLoggedIn
    }),
    {
        signUp,
        logInLoading,
        logOutLoading
    }
)(UserContainer);