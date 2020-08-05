import React from 'react';
import styled from 'styled-components';
import ChangeId from './ChangeId';
import ChangePassword from './ChangePassword';

const InputList = styled.ul`
    padding: 0;
    `

const ListItem = styled.li`
    list-style: none;
    display: flex;
    justify-content: space-between;
    span {
        font-size: 12px;
    }
    `

const SignInInput = props => {
    return(
        <InputList>
            <ListItem>
                <span>ID:</span>
                <ChangeId
                    id={props.id}
                    setId={props.setId} 
                />
            </ListItem>
            <ListItem>
                <span>password:</span>
                <ChangePassword 
                    password={props.password}
                    setPassword={props.setPassword}
                />
            </ListItem>
        </InputList>
    )
}

export default SignInInput;