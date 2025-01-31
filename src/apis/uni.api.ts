/**
 * 登录
 *
 * http://uniapp.dcloud.io/api/plugins/login?id=login
 */
export function uniLogin(
  provider: 'weixin' | 'qq' | 'sinaweibo' | 'xiaomi' | 'apple' | 'univerify' | undefined,
): Promise<UniApp.LoginRes> {
  return new Promise((resolve, reject) => {
    uni.login({
      provider,
      success: (res) => {
        resolve(res)
      },
      fail: (err) => {
        uni.showToast({
          title: `获取微信code失败`,
          icon: 'error',
          duration: 2000,
        })
        reject(err)
      },
    })
  })
}

export function uniUploadFile(
  data: UniNamespace.UploadFileOption,
): Promise<UniApp.UploadFileSuccessCallbackResult> {
  return new Promise((resolve, reject) => {
    uni.uploadFile({
      ...data,
      success: (res) => {
        resolve(res)
      },
      fail: (err) => {
        uni.showToast({
          title: `文件上传oss失败`,
          icon: 'error',
          duration: 2000,
        })
        reject(err)
      },
    })
  })
}
