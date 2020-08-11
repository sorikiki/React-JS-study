import React from 'react';
import styled from 'styled-components';

const BtnContainer = styled.button`
    width: 100%;
    `

const SignUpBtn = ({ id, password, onRegisterUser }) => {
    const onHandleUser = () => {
        onRegisterUser(id, password);
    }

    return (
        <BtnContainer onClick={onHandleUser}>
            Sign Up
        </BtnContainer>
    )
}

export default SignUpBtn;
