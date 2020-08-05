import React, { useState } from 'react';
import styled from 'styled-components';
import SignUpInput from './SignUpInput';
import SignUpBtn from './SignUpBtn';

const SignUpContainer = styled.div`
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
        <SignUpContainer>
            <h2>For a new visitor</h2>
            <SignUpInput 
                id={id} 
                password={password}
                setId={setId}
                setPassword={setPassword}
            />
            <SignUpBtn 
                id={id}
                password={password}
                setId={setId}
                setPassword={setPassword}
            />
        </SignUpContainer>
    )
}

export default SignUp;