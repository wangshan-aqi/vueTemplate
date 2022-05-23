import request from '@/utils/request'

export const getRandomCode = () => {
  return request({
    method: 'get',
    url: '/getRandomCode',
    params: {
      stemp: Date.now() // 防止同一接口缓存问题
    },
    responseType: 'blob'
  })
}
