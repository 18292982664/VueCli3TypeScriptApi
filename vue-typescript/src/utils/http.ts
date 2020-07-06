import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { Message } from 'element-ui';
/**
 * http请求工具类
 * 请求拦截器 负责将客户端标试token值存储并放值在头部提交给服务端
 * 响应拦截器 负责全局处理业务请求的网络或者业务错误
 */
// 创建axios实例
const service = axios.create({
    timeout: 1000//超市时间
})
//请求拦截
service.interceptors.request.use((config: AxiosRequestConfig) => {
    return config
}, (err: any) => {
    Promise.reject(err)
})
//响应拦截
service.interceptors.response.use((response: AxiosResponse) => {
    return response;
}, (err: any) => {
    let errMsg = "";
    if (err && err.response.status) {
        switch (err.response.status) {
            case 401:
                errMsg = "登陆失效，从新登陆";
                break;
        }
    } else {
        errMsg = err;
    }
    Message.error(errMsg)
    return Promise.reject(errMsg)
})
export default service;