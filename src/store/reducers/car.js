import { handleActions } from 'redux-actions'
import {
  CAR_INIT,
  CAR_SELECTED_CID,
  CAR_LIST_IS_SELECTED_ALL,
  CAR_DEFAULT_IS_SELECTED_ALL,
  CAR_CALC_TOTAL_PRICE,
  CAR_UPDATE
} from '../types/car'

const init = {
  list: [],
  selectedCids: [],
  listCheckedAll: false,
  listDefaultCheckedAll: false,
  totalPrice: 0,
  selectedPriceInfo: []
}

export default handleActions(
  {
    [CAR_INIT](state, action) {
      return {
        ...state,
        list: action.payload
      }
    },
    [CAR_UPDATE](state, action) {
      return {
        ...state,
        list: action.payload.list,
        startX: action.payload.startX,
        startY: action.payload.startY
      }
    },
    [CAR_SELECTED_CID](state, action) {
      return {
        ...state,
        selectedCids: action.payload
      }
    },
    [CAR_LIST_IS_SELECTED_ALL](state, action) {
      return {
        ...state,
        listCheckedAll: action.payload
      }
    },
    [CAR_DEFAULT_IS_SELECTED_ALL](state, action) {
      return {
        ...state,
        listDefaultCheckedAll: action.payload
      }
    },
    [CAR_CALC_TOTAL_PRICE](state, action) {
      return {
        ...state,
        totalPrice: action.payload
      }
    }
  },
  init
)
