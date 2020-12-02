import {DECREASE, INCREASE, RESET} from './actions';

const defaultState = {
  count: 0,
}

// setup reducer
export default function reducer(state = defaultState, action) {
  
  switch(action.type) {
    case DECREASE: 
    return {...state, count: state.count - 1};
    case INCREASE: 
    return {...state, count: state.count + 1};
    case RESET: 
    return {...state, count: 0};
    default: 
    return state;
  }
}