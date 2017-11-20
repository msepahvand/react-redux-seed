import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import ajaxCallsInProgress from './ajaxStatus'
import user from './user'

export default combineReducers({
  router: routerReducer,
  user,
  ajaxCallsInProgress
})