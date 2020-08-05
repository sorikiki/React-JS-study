import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { save_id } from '../../reducers/login';
import { save_password } from '../../reducers/login';

const BtnContainer = styled.button`
    width: 100%;
    `

const SignUpBtn = ({ id, password, setId, setPassword }) => {
    const dispatch = useDispatch();

    const onSaveUser = () => {
        dispatch(save_id({ id }));
        dispatch(save_password({ password }));
        alert('회원가입이 완료되었습니다.');
        setId('');
        setPassword('');
    }

    return (
        <BtnContainer onClick={onSaveUser}>
            Sign Up
        </BtnContainer>
    )
}

export default SignUpBtn;