import React, { useState } from 'react';
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

const SignUp = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SignInContainer>
            <h2>For a member</h2>
            <SignInInput 
                id={id}
                password={password}
                setId={setId}
                setPassword={setPassword}
            />
            <SignInBtn 
                id={id}
                password={password}
                setId={setId}
                setPassword={setPassword}
            />
        </SignInContainer>
    )
}

export default SignUp;