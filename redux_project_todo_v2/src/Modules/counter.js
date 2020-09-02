import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_DELAY = 'counter/INCREASE_DELAY';
const DECREASE_DELAY = 'counter/DECREASE_DELAY';

const increase = () => ({ type: INCREASE });
const decrease = () => ({ type: DECREASE });

export const increase_delay = () => ({ type: INCREASE_DELAY })

export const decrease_delay = () => ({ type: DECREASE_DELAY })

function* increaseSaga() {
    yield delay(1000); // 1초 기다림.
    yield put(increase()); // 특정 액션을 디스패치함.
}

function* decreaseSaga() {
    yield delay(1000);
    yield put(decrease());
};

export function* counterSaga() {
    // takeEvery는 들어오는 모든 액션에 대해 특정 작업을 처리해줌. 즉, 이 상황에서는 모든 INCREASE 액션에 대해 increaseSaga를 실행하는 것.
    yield takeEvery(INCREASE_DELAY, increaseSaga);
    // takeLatest는 기존에 진행 중이던 작업이 있다면 취소 처리하고 가장 마지막으로 실행된 작업만 수행.
    yield takeLatest(DECREASE_DELAY, decreaseSaga); 
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
