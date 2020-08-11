import React from 'react';
import styled from 'styled-components';

const SignOutContainer = styled.div`
    width: 33%;
    h2 {
        text-align: center;
        color: red;
        text-decoration: underline;
        cursor: pointer;
    }
    `

const SignOut = ({ logOutLoading }) => {
    const onHandleLoggedOut = () => {
        logOutLoading();
    }

    return (
        <SignOutContainer>
            <h2 onClick={onHandleLoggedOut}>Sign Out</h2>
        </SignOutContainer>
    )
}

export default SignOut;