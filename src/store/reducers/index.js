import { combineReducers } from 'redux'
import car from './car'
import detail from './detail'
import book from './book'

export default combineReducers({
  car,
  detail,
  book
})
