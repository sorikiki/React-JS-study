import React from 'react';
import styled from 'styled-components';

const MyPageContainer = styled.div`
    width: 33%;
    h2, h6 {
        text-align: center;
        width: 100%;
    }
    `

const MyPage = ({id}) => {
    return (
        <MyPageContainer>
            <h2>MyPage</h2>
            <h6><strong>{id}</strong></h6>
            <h6>내정보</h6>
        </MyPageContainer>
    )
}

export default MyPage;