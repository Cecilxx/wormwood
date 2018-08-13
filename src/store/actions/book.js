import { BOOK_INIT } from '../types/book'
import { createAction } from 'redux-actions'

export const asyncBookInit = createAction(BOOK_INIT, () => {
  return new Promise((resolve, reject) => {
    try {
      console.log('book init')
      setTimeout(() => {
        resolve({
          productions: [
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
            }
          ],
          paymentList: [
            {
              type: '微信支付',
              payid: '300001'
            },
            {
              type: '支付宝支付',
              payid: '300002'
            }
          ],
          paymentIndex: 0,
          addressList: [
            {
              type: '上海',
              aid: '400001'
            },
            {
              type: '北京',
              aid: '400002'
            }
          ],
          addressId: '40001',
          postage: 10
        })
      }, 1000)
    } catch (error) {
      reject(error)
    }
  })
})
