import { handleActions } from 'redux-actions'
import { BOOK_INIT } from '../types/book'

const init = {
  addressList: [],
  addressId: 123,
  paymentList: [],
  paymentIndex: 0,
  productions: []
}

export default handleActions(
  {
    [BOOK_INIT](state, action) {
      console.log(action)
      return {
        ...state,
        ...action.payload
      }
    }
  },
  init
)
