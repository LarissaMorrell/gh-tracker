import {createStore} from 'redux';

import * as reducers from './reducers/index';

//storage always will be createStore()
export default createStore(reducers.repositoryReducer);