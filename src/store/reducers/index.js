import { combineReducers } from 'redux'
import counter from './counter'
import detail from './detail'

export default combineReducers({
  counter,
  detail
})
