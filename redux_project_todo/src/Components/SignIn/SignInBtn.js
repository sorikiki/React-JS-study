import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toggleLoginAsync }  from '../../reducers/login';

const BtnContainer = styled.button`
    width: 100%;
    `

const SignInBtn = ({ id, password }) => {
    const user = useSelector(state => state.user);
    const isLoggedIn = useSelector(state => state.user.isLoggedIn)
    const dispatch = useDispatch();
    const history = useHistory();

    const onCompareInput = () => {
      if(user.id === id && user.password === password) {
          dispatch(toggleLoginAsync(() => { history.push('/logIn') }));
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