import { combineReducers } from 'redux'
import car from './car'
import detail from './detail'
import book from './book'
import address from './address'
import order from './order'

export default combineReducers({
  car,
  detail,
  book,
  address,
  order
})
