/**
 * Exports the combined reducers object. New reducers
 * should be added here.
 */
import {combineReducers} from 'redux';
import listItem from './listItem';

export default combineReducers({
  listItem,
});
