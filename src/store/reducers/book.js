import { handleActions } from 'redux-actions'
import { BOOK_INIT, BOOK_UPDATE_PAYMENT } from '../types/book'

const init = {
  addressInfo: null,
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
    },
    [BOOK_UPDATE_PAYMENT](state, action) {
      return {
        ...state,
        paymentIndex: action.payload
      }
    }
  },
  init
)
