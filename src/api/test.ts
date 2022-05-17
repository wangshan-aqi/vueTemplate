// 测试
import request from '@/utils/request'
import { IUserRegisters, IBannerList } from './types/test'
// interface ResponseData <T = any> {
//   status: number,
//   msg: string,
//   data: T
// }
export const getLoginInfo = () => {
  return request({
    method: 'GET',
    url: '/home/banner'
  })
}
// export const getBannerList = () => {
//   return request({
//     method: 'GET',
//     url: '/getBannerList'
//   })
// }
export const getBannerList = () => {
  return request<IBannerList>({
    method: 'GET',
    url: '/getBannerList'
  })
}
// export const userRegister = () => {
//   return request.get<ResponseData<{
//     token: string,
//     username: string,
//   }>>('/userRegister')
// }

// export const userRegister = () => {
//   return request<ResponseData<{
//     token: string,
//     username: string,
//   }>>({
//     method: 'GET',
//     url: '/getBannerList'
//   })
// }
// export const userRegister = () => {
//   return request<ResponseData<{
//     token: string,
//     username: string,
//   }>>({
//     method: 'GET',
//     url: '/getBannerList'
//   })
// }
// export const userRegister = () => {
//   return request<ResponseData<IUserRegister>>({
//     method: 'GET',
//     url: '/getBannerList'
//   })
// }
export const userRegister = () => {
  return request<IUserRegisters>({
    method: 'GET',
    url: '/getBannerList'
  })
}
