import React from 'react';
import styled from 'styled-components';
import RegisterId from './RegisterId';
import RegisterPassword from './RegisterPassword';

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

const SignUpInput = props => {
    return(
        <InputList>
            <ListItem>
                <span>ID:</span>
                <RegisterId
                    id={props.id}
                    setId={props.setId} 
                />
            </ListItem>
            <ListItem>
                <span>password:</span>
                <RegisterPassword 
                    password={props.password}
                    setPassword={props.setPassword}
                />
            </ListItem>
        </InputList>
    )
}

export default SignUpInput;