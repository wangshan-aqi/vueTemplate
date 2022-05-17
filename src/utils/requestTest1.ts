import axios, { AxiosRequestConfig } from 'axios'

const request = axios.create({
  // baseURL: 'http://localhost:8000'
  baseURL: 'http://127.0.0.1:7001'
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
// request 不支持泛型
// request.get post put 支持泛型
// 由于后台又进行封装 导致我们访问数据麻烦， 所以进行封装
export default <T = any>(config: AxiosRequestConfig<any>) => {
  return request(config).then(res => {
    // return res.data.data as T
    return res.data as T
  })
}
