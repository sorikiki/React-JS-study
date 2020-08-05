import React from 'react';
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

const SignUp = props => {
    return (
        <SignUpContainer>
            <h2>For a new visitor</h2>
            <SignUpInput 
                id={props.id} 
                password={props.password}
                setId={props.setId}
                setPassword={props.setPassword}
            />
            <SignUpBtn 
                setId={props.setId}
                setPassword={props.setPassword}
            />
        </SignUpContainer>
    )
}

export default SignUp;