//addNote.js
const util = require('../../utils/util.js')

Page({
  data: {
    authVisible: true,
    anonymous: false,
    colorStyle: 'pink'
  },
  onLoad: function () {
    var that = this
    wx.getStorage({
      key: 'openId',
      success: function (res) {
        if (res.data) {} else {}
      },
      fail: function (res) {
        that.setData({
          authVisible: true
        })
      }
    })
  },
  toggleAonymous() {
    this.setData({
      anonymous: !this.data.anonymous
    })
  },
  changeColor(e) {
    this.setData({
      colorStyle: e.currentTarget.dataset.color
    })
  },
  getUserInfo() {
    let that = this
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          that.setData({
            authVisible: false
          })
          wx.getUserInfo({
            success: res => {
              console.log(res)
            },
            fail: res => {
              console.log(res)
            }
          })
        } else {
          that.setData({
            authVisible: true
          })
        }
      },
      fail: res => {
        console.log(res)
      }
    })
  }
})