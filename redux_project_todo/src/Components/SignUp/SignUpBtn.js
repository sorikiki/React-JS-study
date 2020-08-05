import React from 'react';
import styled from 'styled-components';

const BtnContainer = styled.button`
    width: 100%;
    `

const SignUpBtn = ({ setId, setPassword }) => {
    const onResetInput = () => {
        alert('회원가입이 완료되었습니다.')
    }

    return (
        <BtnContainer onClick={onResetInput}>
            Sign Up
        </BtnContainer>
    )
}

export default SignUpBtn;