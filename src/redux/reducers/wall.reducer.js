import { combineReducers } from 'redux';

const wallReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_WALL': 
            return state = action.payload;
        default:
            return state;
    }
};

const wallComments = (state = [], action) => {
    switch (action.type) {
        case 'SET_COMMENT': 
            return state = [...state, action.payload];
        default:
            return state;
    }
};

export default combineReducers({
    wallReducer,
    wallComments,
  });
