import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { toggle_login } from '../../reducers/login';

const BtnContainer = styled.button`
    width: 100%;
    `

const SignInBtn = ({ id, password, setId, setPassword }) => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const onCompareInput = () => {
      if(user.id === id && user.password === password) {
          setId('');
          setPassword('');
          dispatch(toggle_login());
      }
      else alert('가입되지 않은 회원입니다.');
    }

    return (
        <BtnContainer onClick={onCompareInput}>
            Sign Up
        </BtnContainer>
    )
}

export default SignInBtn;