//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    noteList: [{
      time: '2018-04-11',
      name: '匿名',
      content: '收到拍毕业照的通知的时候，心忽然揪了一下，就这样毕业季来了，来不及反应，来不及回头，该来的来了，该走的走了...',
    }, {
      time: '2018-04-11',
      name: '匿名',
      content: '后来的我们，什么都有了，却没了我们',
    }, {
      time: '2018-04-11',
      name: '匿名',
      content: '你还别不信，真是是这样',
    }, {
      time: '2018-04-11',
      name: '匿名',
      content: '后来的我们，什么都有了，却没了我们',
    }, {
      time: '2018-04-11',
      name: '匿名',
      content: '这是一条测试数据这是一条测试数据这是一条测试数据这是一条测试数据这是一条测试数据',
    }],
    otherData: [{
      time: '2018-04-11',
      name: '匿名',
      content: '收到拍毕业照的通知的时候，心忽然揪了一下，就这样毕业季来了，来不及反应，来不及回头，该来的来了，该走的走了...',
    }, {
      time: '2018-04-11',
      name: '匿名',
      content: '后来的我们，什么都有了，却没了我们',
    }, {
      time: '2018-04-11',
      name: '匿名',
      content: '你还别不信，真是是这样',
    }, {
      time: '2018-04-11',
      name: '匿名',
      content: '后来的我们，什么都有了，却没了我们',
    }, {
      time: '2018-04-11',
      name: '匿名',
      content: '这是一条测试数据这是一条测试数据这是一条测试数据这是一条测试数据这是一条测试数据',
    }],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onReachBottom() {
    var arr = this.data.noteList
    var arrLength = arr.length
    for (var index = 0; index < this.data.otherData.length; index++) {
      this.data.noteList.push(this.data.otherData[index])
    }
    this.setData({
      noteList: this.data.noteList
    })
  }
})