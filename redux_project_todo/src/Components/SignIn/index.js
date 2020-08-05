import React from 'react';
import styled from 'styled-components';
import SignInInput from './SignInInput';
import SignInBtn from './SignInBtn';

const SignInContainer = styled.div`
    width: 33%;
    margin-left: 10px;
    h2 {
        text-align: center
    }
    `

const SignUp = props => {
    return (
        <SignInContainer>
            <h2>For a member</h2>
            <SignInInput 
                id={props.signInId}
                password={props.signInPassword}
                setId={props.setSignInId}
                setPassword={props.setSignInPassword}
            />
            <SignInBtn 
                signUpId={props.signUpId}
                signUpPassword={props.signUpPassword}
                signInId={props.signInId}
                signInPassword={props.signInPassword}
                setId={props.setSignInId}
                setPassword={props.setSignInPassword}
            />
        </SignInContainer>
    )
}

export default SignUp;