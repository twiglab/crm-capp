import { createSSRApp } from 'vue'
import App from './App.vue'
import store from './store'
import { getExpireInPayload, getToken, setToken } from '@/utils/auth'
// import { useMeStore } from '@/store/user'
import { routeInterceptor, requestInterceptor, prototypeInterceptor } from './interceptors'
import 'virtual:uno.css'
import '@/style/index.scss'
import { apolloClient } from './graphql/setup'

export function createApp() {
  const app = createSSRApp(App)
  app.use(store)
  app.use(apolloClient)
  app.use(routeInterceptor)
  app.use(requestInterceptor)
  app.use(prototypeInterceptor)
  return {
    app,
  }
}

// 请求拦截器
uni.addInterceptor('request', {
  async invoke(request) {
    uni.showLoading({ title: '正在请求中...' })
    // const meStore = useMeStore()
    // if (meStore.inLogin || inRefresh) {
    //   return request
    // }
    // todo 拿到token登录
    const accessToken = getToken('accessToken') // 获取身份验证令牌
    if (accessToken) {
      request.header.Authorization = `Bearer ${accessToken}`
      return request
    } else {
      // refreshToken过期，需要重新登录
      uni.reLaunch({
        url: '/pages/about/about',
        success: () => {
          uni.showToast({
            title: '登录凭证无效',
            icon: 'error',
            duration: 2000,
          })
        },
      })
    }
  },
  fail(err: Error) {
    console.log('err====>', err)
    uni.showToast({
      title: `网络请求错误`,
      icon: 'error',
      duration: 2000,
    })
  },
  complete() {
    // showLoading需要每次请求前手动添加，因为里面有可自定义的title
    uni.hideLoading()
  },
})
