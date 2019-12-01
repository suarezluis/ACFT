import {TEST} from '../Types';

const INITIAL_STATE = {
  state: true,
};

let newState = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TEST:
      newState = {...state, email: action.payload};
      return newState;
      break;

    default:
      return state;
      break;
  }
};
