//app.js
let baseUrl = 'http://localhost:1234'
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // 登录
    wx.login({
        success: function (res) {
          if (res.code) {
            //发起网络请求
            wx.request({
              url: 'https://api.weixin.qq.com/sns/jscode2session',
              data: {
                appid: 'wxdc028db00a2ea45d',
                secret: 'ace2132a76f6157cd31b97bac0e71a16',
                js_code: res.code,
                grant_type: 'authorization_code'
              },
              success(res) {
                try {
                  wx.setStorageSync('openId', res.data.openid)
                } catch (e) {}
              }
            })
          } else {
            console.log('登录失败！' + res.errMsg)
          }
        }
      }),
      // 获取用户信息
      wx.getSetting({
        success: res => {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
            wx.getUserInfo({
              success: res => {
                // 可以将 res 发送给后台解码出 unionId
                this.globalData.userInfo = res.userInfo

                // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                // 所以此处加入 callback 以防止这种情况
                if (this.userInfoReadyCallback) {
                  this.userInfoReadyCallback(res)
                }
              },
              fail: function (res) {
                console.log(res)
              }
            })
          }
        }
      })
  },
  ajax: function (url, requestData, method) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: baseUrl + url,
        data: requestData,
        header: {
          'content-type': 'application/json' // 默认值
        },
        method: method || 'POST',
        success: function (res) {
          console.log(res.data)
          resolve(res)
        },
        fail(err) {
          // fail && fail.apply(this, arguments)
          reject(err)
        },
        // complete() {
        //   complete && complete.apply(this, arguments)
        // }
      })
    })

  },
  globalData: {
    userInfo: null
  }
})