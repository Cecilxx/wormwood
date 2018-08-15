import { handleActions } from 'redux-actions'
import { ORDER_INIT } from '../types/order'

const init = {
  orderList: []
}

export default handleActions(
  {
    [ORDER_INIT](state, action) {
      console.log(action)
      return {
        ...state,
        orderList: action.payload
      }
    }
  },
  init
)
