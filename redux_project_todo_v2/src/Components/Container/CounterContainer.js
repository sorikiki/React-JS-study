import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase_delay, decrease_delay } from '../../Modules/counter';
import Counter from '../Counter';

const CounterContainer = () => {
    const number = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const onIncrease = () => dispatch(increase_delay());
    
    const onDecrease = () => dispatch(decrease_delay());

    return (
        <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
    )
};

export default CounterContainer;