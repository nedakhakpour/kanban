import { combineReducers } from 'redux';
import kanbanReducer from './kanbanReducer';

const rootReducer = combineReducers({
  kanban: kanbanReducer,
});

export default rootReducer;
