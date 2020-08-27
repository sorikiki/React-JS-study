import React from 'react';

const Counter = ({ number, onIncrease, onDecrease }) => {
    return (
        <div>
            <p>{number}</p>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter;