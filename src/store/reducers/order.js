import { handleActions } from 'redux-actions'
import { ORDER_INIT, ORDER_SET_TAB_INDEX } from '../types/order'

const init = {
  orderList: [],
  defaultIndex: 0
}

export default handleActions(
  {
    [ORDER_INIT](state, action) {
      console.log(action)
      return {
        ...state,
        orderList: action.payload
      }
    },
    [ORDER_SET_TAB_INDEX](state, action) {
      console.log('set tab index', action.payload)
      return {
        ...state,
        defaultIndex: action.payload
      }
    }
  },
  init
)
