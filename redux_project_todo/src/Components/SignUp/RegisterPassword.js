import React from 'react';

const RegisterPassword = ({ password, setPassword }) => {
    const onRegisterPassword = e => {
        setPassword(e.target.value);
    }

    return (
        <input
        type='password'
        name='password'
        onChange={onRegisterPassword}
        value={password}
        />
    )
}

export default RegisterPassword;