import { ADDRESS_INIT } from '../types/address'
import { createAction } from 'redux-actions'

export const asyncAddressInit = createAction(ADDRESS_INIT, () => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve([
          {
            name: '刘小溪',
            mobile: 15222860321,
            address: '上海市上海市长宁区凌空soho1',
            aid: '400001',
            default: true
          },
          {
            name: '刘小溪',
            mobile: 15222860321,
            address: '上海市上海市长宁区凌空soho2',
            aid: '400002',
            default: false
          },
          {
            name: '刘小溪',
            mobile: 15222860321,
            address: '上海市上海市长宁区凌空soho3',
            aid: '400003',
            default: false
          }
        ])
      }, 1000)
    } catch (error) {
      reject(error)
    }
  })
})
