import React from 'react';
import styled from 'styled-components';

const BtnContainer = styled.button`
    width: 100%;
    `

const SignInBtn = ({ id, password, logInLoading }) => {
    const onHandleUser = () => {
        logInLoading(id, password);
    }

    return (
        <BtnContainer onClick={onHandleUser}>
            Sign In
        </BtnContainer>
    )
}

export default SignInBtn;
    