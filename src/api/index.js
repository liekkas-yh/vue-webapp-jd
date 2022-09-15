import request from '@/utils/request'

// page=1  size=10  cate=''
export function fetchGoodList (params={}) {
  return request({
    url: '/good/list',
    method: 'GET',
    params
  })
}

// 获取所有一级品类
export function fetchCates () {
  return request({
    url: '/good/cates',
    method: 'GET',
    params: {}
  })
}

// 根据id获取商品详情数据  params = { id }
export function fetchGoodInfo (id) {
  return request({
    url: '/good/info',
    method: 'GET',  // axios中GET请求，用params属性入参
    params: { id }
  })
}

// 登录接口  username, password
export function fetchLogin (data) {
  return request({
    url: '/user/login',
    method: 'POST',  // axios中POST请求，用data属性入参
    data
  })
}

// 注册接口  username, password
export function fetchRegist (data) {
  return request({
    url: '/user/regist',
    method: 'POST',
    data
  })
}

// 获取购物车列表接口（鉴权）
export function fetchCartList () {
  return request({
    url: '/cart/list',
    method: 'GET',
    params: {}
  })
}


// 一次性抛出
export default {
  fetchGoodList,
  fetchCates,
  fetchGoodInfo,
  fetchLogin,
  fetchRegist,
  fetchCartList
}
