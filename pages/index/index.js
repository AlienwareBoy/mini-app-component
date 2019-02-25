// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemList: [{
      text: '基础组件',
      path: 'path1'
    }, {
      text: '布局组件',
      path: 'path2'
    }, {
      text: '功能组件',
      path: 'path3'
    }, {
      text: '操作反馈',
      path: 'path4'
    }, {
      text: '表单组件',
      path: 'path5'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  toPage(e) {
    let {
      path
    } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `../${path}/${path}`,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})