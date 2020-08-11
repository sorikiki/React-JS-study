import React, { useState } from 'react';
import styled from 'styled-components';
import SignUpBtn from './SignUpBtn';

const SignUpContainer = styled.div`
    width: 50%;
    margin-left: 10px;
    h2 {
        text-align: center
    }
    `

const SignUpInput = styled.div`
    display: flex;
    justify-content: space-between;
    span {
        font-size: 10px;
    }
    `

const SignUp = ({ onRegisterUser }) => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const onChangeId = e => {
        setId(e.target.value);
    }

    const onChangePassword = e => {
        setPassword(e.target.value);
    }

    return (
        <SignUpContainer>
            <h2>For a new visitor</h2>
            <SignUpInput>
                <span>id:</span>
                <input 
                    type='text'
                    value={id}
                    onChange={onChangeId}
                />
            </SignUpInput>
            <SignUpInput>
                <span>password:</span>
                <input 
                    type='password'
                    value={password}
                    onChange={onChangePassword}
                />
            </SignUpInput>
            <SignUpBtn id={id} password={password} onRegisterUser={onRegisterUser} />
        </SignUpContainer>
    )
}

export default SignUp;