import React from 'react';
import styled from 'styled-components';

const BtnContainer = styled.button`
    width: 100%;
    `

const SignUpBtn = ({ id, password, setId, setPassword, onRegisterUser }) => {
    const onHandleUser = () => {
        onRegisterUser(id, password);
        setId('');
        setPassword('');
        alert('회원가입이 완료되었습니다.');
    }

    return (
        <BtnContainer onClick={onHandleUser}>
            Sign Up
        </BtnContainer>
    )
}

export default SignUpBtn;
