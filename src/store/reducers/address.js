import { handleActions } from 'redux-actions'
import { ADDRESS_INIT } from '../types/address'

const init = {
  addressList: []
}

export default handleActions(
  {
    [ADDRESS_INIT](state, action) {
      console.log(action)
      return {
        ...state,
        addressList: action.payload
      }
    }
  },
  init
)
