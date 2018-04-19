//addNote.js
const util = require('../../utils/util.js')

Page({
  data: {
    anonymous: false,
    colorStyle: 'pink'
  },
  onLoad: function() {},
  toggleAonymous() {
    this.setData({
      anonymous: !this.data.anonymous
    })
  },
  changeColor(e){
    this.setData({
      colorStyle: e.currentTarget.dataset.color
    })
  }
})
