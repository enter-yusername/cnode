// 封装 axios
import axios from "axios";

// 请求都是通用的(基地址 超时设置 请求报错等)

// 向后端发送请求需要根据后端需求设置请求头信息

// 响应的时候需要对后端提供的数据进行处理

// 创建一个新的 axios 实例
const instance = axios.create({
  // 请求基地址
  baseURL: 'https://cnodejs.org/api/v1',
  // 请求超时时长
  timeout: 1000,
  // 请求头设置  一般不在此设置
  // headers: {'X-Custom-Header': 'foobar'}
});

// 请求拦截器
// 请求时设置请求头
instance.interceptors.request.use((config) => {
  const token = "";
  if (token) {
    // 验证信息不能使用中文
    config.headers.Authorization = "token"
  }
  return config;
});

// 响应拦截器
instance.interceptors.response.use(res => {
  // res axios 将后端的响应包装之后的结果
  return res.data;
});

// export const getAction = (url, params) => instance.get(url, params)
// 请求大概率使用 get post 方法  可以进行封装
export const getAction = (url, params) => instance({
  method: 'GET',
  url,
  params,
  // 请求头设置 有需要可以进行设置
  // headers,
});

export const postAction = (url, params) => instance({
  method: 'POST',
  url,
  params,
  // 请求头设置 有需要可以进行设置
  // headers,
});

export default instance;