import { combineReducers } from 'redux';

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'USER_INFO': 
            return state = action.payload;
        default:
            return state;
    }
};

export default combineReducers({
    userReducer,
  });

