import React from 'react';

const RegisterId = ({ id, setId }) => {

    const onRegisterId = e => {
        setId(e.target.value);
    }

    return (
        <input
        type='text'
        name='id'
        onChange={onRegisterId}
        value={id}
        />
    )
}

export default RegisterId;