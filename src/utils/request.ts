import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:8000'
})
// 添加请求拦截器
request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 统一设置用户身份token
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
request.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  // 统一处理接口响应错误 比如token 过期无效 服务端异常等
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default request