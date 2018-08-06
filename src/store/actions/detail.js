import { DETAIL_INIT } from '../types/detail'
import { createAction } from 'redux-actions'
console.log(DETAIL_INIT, 1)
export const asyncDetailInit = createAction(DETAIL_INIT, () => {
  console.log(DETAIL_INIT, 2)
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        imgUrls: [
          'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
          'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
        ],
        baseInfo: {
          priceInfo: {
            originalPrice: '￥1000',
            currentPrice: '￥500',
            salesVolume: '8723'
          },
          title: '爱买不买',
          tips: [
            {
              text: '正品保障'
            },
            {
              text: '极速发货'
            },
            {
              text: '7天退货'
            }
          ]
        },
        tabInfo: {
          introduction: '好东西赶快买',
          evaluation: '好评'
        },
        selectInfo: {
          price: '￥500',
          stock: '10000',
          specification: {
            id: '1',
            text: '默认'
          }
        },
        pid: '123321'
      })
    }, 1000)
  })
})
