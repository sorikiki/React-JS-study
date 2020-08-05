import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggle_login } from '../../reducers/login';

const SignOutContainer = styled.div`
    width: 33%;
    h2 {
        text-align: center;
        width: 100%;
    }
    `

const SignOut = () => {
    const dispatch = useDispatch();

    const onSetLoggedOut = () => {
        dispatch(toggle_login());
    }

    return (
        <SignOutContainer>
            <h2><Link to='/' onClick={onSetLoggedOut}>Sign Out</Link></h2>
        </SignOutContainer>
    )
}

export default SignOut;