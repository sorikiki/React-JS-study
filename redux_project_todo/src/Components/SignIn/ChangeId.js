import React from 'react';

const ChangeId = ({ id, setId }) => {

    const onChangeId = e => {
        setId(e.target.value);
    }

    return (
        <input
        type='text'
        name='id'
        onChange={onChangeId}
        value={id}
        />
    )
}

export default ChangeId;