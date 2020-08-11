import React from 'react';
import styled from 'styled-components';

const UserNotFoundContainer = styled.div`
    margin: 0 auto;
        h1, h3 {
            text-align: center;
        }
    `

const UserNotFound = () => {
    return (
        <UserNotFoundContainer>
            <h1>Error</h1>
            <h3>Page Not Found</h3>
        </UserNotFoundContainer>
    )
}

export default UserNotFound;