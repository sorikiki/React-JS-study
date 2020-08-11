import React from 'react';
import styled from 'styled-components';

const SignInContainer = styled.div`
    width: 50%;
    margin-left: 10px;
    h2 {
        text-align: center
    }
    `

const SignIn = ({ logInLoading }) => {
    return (
        <SignInContainer>
            <h2>For a member</h2>
            <input />
            <button />
        </SignInContainer>
    )
}

export default SignIn;