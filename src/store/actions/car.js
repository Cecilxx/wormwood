import { CAR_INIT } from '../types/car'
import { createAction } from 'redux-actions'

export const asyncCarInit = createAction(CAR_INIT, () => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve([
          {
            title: '哈哈哈哈1',
            pid: '100001',
            cid: '200001',
            price: 123,
            count: 3,
            stock: 1000,
            countDisabled: true,
            currency: '￥',
            imgUrl:
              'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
            specification: {
              id: 1,
              text: '默认'
            }
          },
          {
            title: '哈哈哈哈2',
            pid: '100002',
            cid: '200002',
            price: 123,
            count: 3,
            stock: 1000,
            countDisabled: true,
            currency: '￥',
            imgUrl:
              'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
            specification: {
              id: 1,
              text: '默认'
            },
            isSelected: false
          },
          {
            title: '哈哈哈哈3',
            pid: '100003',
            cid: '200003',
            price: 123,
            count: 3,
            stock: 1000,
            countDisabled: true,
            currency: '￥',
            imgUrl:
              'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
            specification: {
              id: 1,
              text: '默认'
            },
            isSelected: false
          }
        ])
      }, 1000)
    } catch (error) {
      reject(error)
    }
  })
})
