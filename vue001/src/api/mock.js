// 这里用mock进行拦截

import Mock from 'mockjs'
import homeApi from './mockData/home'
//拦截请求
Mock.mock('/home/getData', homeApi.getHomeData)