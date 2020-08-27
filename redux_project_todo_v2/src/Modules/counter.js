const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

const increase = () => ({ type: INCREASE });

const decrease = () => ({ type: DECREASE });

export const increase_delay = () => dispatch => {
    setTimeout(() => dispatch(increase()), 1000);
};

export const decrease_delay = () => dispatch => {
    setTimeout(() => dispatch(decrease()), 1000);
}

const initialState = 0;

const counter = (state = initialState, action) => {
    switch(action.type) {
        case INCREASE:
            return state + 1;
        case DECREASE:
            return state - 1;
        default:
            return state;
    }
};

export default counter;
