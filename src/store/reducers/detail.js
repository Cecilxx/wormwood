import { handleActions } from 'redux-actions'
import {
  SHOWSELECT,
  INCREASE,
  DECREMENT,
  INPUTBLUR,
  INPUTCHANGE,
  DETAIL_INIT,
  DETAIL_DEFAULT
} from '../types/detail'

const init = {
  showSelect: false,
  count: 1,
  initData: {
    baseInfo: { tips: [] }
  }
}

export default handleActions(
  {
    [SHOWSELECT](state, action) {
      return {
        ...state,
        showSelect: action.payload
      }
    },
    [INCREASE](state, action) {
      return {
        ...state,
        count: state.count + 1
      }
    },
    [DECREMENT](state, action) {
      return {
        ...state,
        count: state.count > 1 ? state.count - 1 : 1
      }
    },
    [INPUTCHANGE](state, action) {
      return {
        ...state,
        count: action.payload
      }
    },
    [INPUTBLUR](state, action) {
      return {
        ...state,
        count: action.payload ? action.payload : 1
      }
    },
    [DETAIL_INIT](state, action) {
      console.log('reducer', action)
      return {
        ...state,
        initData: { ...action.payload }
      }
    },
    [DETAIL_DEFAULT](state, action) {
      return { ...init }
    }
  },
  init
)
