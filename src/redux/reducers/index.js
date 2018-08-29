import { combineReducers } from 'redux';
import user from './user.reducer';
import wall from './wall.reducer';

const store = combineReducers({
    user,
    wall,
});

export default store;