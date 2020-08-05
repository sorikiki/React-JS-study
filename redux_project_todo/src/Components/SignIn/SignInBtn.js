import React from 'react';
import styled from 'styled-components';

const BtnContainer = styled.button`
    width: 100%;
    `

const SignInBtn = props => {
    const onCompareInput = () => {
        if (props.signUpId === props.signInId && props.signUpPassword === props.signInPassword) {
            props.setId('');
            props.setPassword('');
        } else alert('가입되지 않은 회원입니다.')
    }

    return (
        <BtnContainer onClick={onCompareInput}>
            Sign Up
        </BtnContainer>
    )
}

export default SignInBtn;