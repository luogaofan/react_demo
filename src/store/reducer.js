import { combineReducers } from 'redux-immutable';

import { reducer as menuReducer } from '../components/app-menu/store';

const cReducer = combineReducers({
 menu: menuReducer
});

export default cReducer;
