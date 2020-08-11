import React, { useState } from 'react';
import styled from 'styled-components';
import SignInBtn from './SignInBtn';

const SignInContainer = styled.div`
    width: 50%;
    margin-left: 10px;
    h2 {
        text-align: center
    }
    `
    
const SignInInput = styled.div`
    display: flex;
    justify-content: space-between;
    span {
        font-size: 10px;
    }
    `

const SignIn = ({ logInLoading }) => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const onChangeId = e => {
        setId(e.target.value);
    }

    const onChangePassword = e => {
        setPassword(e.target.value);
    }

    return (
        <SignInContainer>
            <h2>For a member</h2>
            <SignInInput>
                <span>id:</span>
                <input 
                    type='text'
                    value={id}
                    onChange={onChangeId}
                />
            </SignInInput>
            <SignInInput>
                <span>password:</span>
                <input 
                    type='password'
                    value={password}
                    onChange={onChangePassword}
                />
            </SignInInput>
            <SignInBtn 
                id={id}
                password={password}
                setId={setId} 
                setPassword={setPassword} 
                logInLoading={logInLoading} 
            />
        </SignInContainer>
    )
}

export default SignIn;