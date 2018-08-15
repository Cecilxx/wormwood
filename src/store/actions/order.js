import { ORDER_INIT } from '../types/order'
import { createAction } from 'redux-actions'

export const asyncOrderInit = createAction(ORDER_INIT, ({ filter }) => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        if (filter === 0) {
          resolve([
            {
              totalPrice: 1000,
              currency: '￥',
              oid: '5000001',
              creatTime: '2018-10-10',
              productions: [
                {
                  currency: '￥',
                  count: 3,
                  pid: '1000001',
                  creatTime: '2018-10-10',
                  title: '哈哈哈哈1',
                  cid: '200001',
                  price: 123,
                  imgUrl:
                    'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
                  specification: {
                    id: 1,
                    text: '默认'
                  }
                },
                {
                  currency: '￥',
                  count: 3,
                  pid: '100000',
                  creatTime: '2018-10-10',
                  title: '哈哈哈哈11111',
                  cid: '200001',
                  price: 123,
                  imgUrl:
                    'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
                  specification: {
                    id: 1,
                    text: '默认'
                  }
                }
              ]
            },
            {
              totalPrice: 1000,
              currency: '￥',
              creatTime: '2018-10-10',
              oid: '5000002',
              productions: [
                {
                  currency: '￥',
                  count: 3,
                  pid: '1000001',
                  creatTime: '2018-10-10',
                  title: '哈哈哈哈1',
                  cid: '200001',
                  price: 123,
                  imgUrl:
                    'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
                  specification: {
                    id: 1,
                    text: '默认'
                  }
                },
                {
                  currency: '￥',
                  count: 3,
                  pid: '100000',
                  creatTime: '2018-10-10',
                  title: '哈哈哈哈11111',
                  cid: '200001',
                  price: 123,
                  imgUrl:
                    'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
                  specification: {
                    id: 1,
                    text: '默认'
                  }
                }
              ]
            }
          ])
        } else if (filter === 1) {
          resolve([])
        } else if (filter === 2) {
          resolve([])
        } else {
          resolve([])
        }
      }, 1000)
    } catch (error) {
      reject(error)
    }
  })
})
