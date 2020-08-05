import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const MyPageContainer = styled.div`
    width: 33%;
    h2, h6 {
        text-align: center;
        width: 100%;
    }
    `

const MyPage = () => {
    const user = useSelector(state => state.user);
    return (
        <MyPageContainer>
            <h2>MyPage</h2>
            <h6><strong>{user.id}</strong></h6>
            <h6>내정보</h6>
        </MyPageContainer>
    )
}

export default MyPage;