import React from 'react';

const ChangePassword = ({ password, setPassword }) => {
    const onChangePassword = e => {
        setPassword(e.target.value);
    }

    return (
        <input
        type='password'
        name='password'
        onChange={onChangePassword}
        value={password}
        />
    )
}

export default ChangePassword;