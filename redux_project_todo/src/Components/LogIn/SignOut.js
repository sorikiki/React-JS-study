import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleLoginAsync } from '../../reducers/login';

const SignOutContainer = styled.div`
    width: 33%;
    h2 {
        text-align: center;
        color: red;
        text-decoration: underline;
        cursor: pointer;
    }
    `

const SignOut = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const onSetLoggedOut = () => {
        dispatch(toggleLoginAsync(() => { history.push('/') }));
    }

    return (
        <SignOutContainer>
            <h2 onClick={onSetLoggedOut}>Sign Out</h2>
        </SignOutContainer>
    )
}

export default SignOut;