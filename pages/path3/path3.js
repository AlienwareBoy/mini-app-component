import {
  chooseAddresss,
  MiniApi,
  openSetting
} from '../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgNums: 3,
    imgList: [],
    List: [], //上传的图片列表
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  imgUpload(e) {
    console.log('上传完毕')
    console.log(e)
  },
  onReady: function() {

  },
  getAddresss(e) {
    let that = this;
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.address']) {
          chooseAddresss().then(res => {
            console.log(res)
            that.setData({
              res
            })
          })
        } else {
          wx.showModal({
            title: '请授权',
            content: 'sdfsf',
            success(res) {
              if (res.confirm) {
                wx.openSetting({
                  success: function(res) {
                    console.log(res)
                  },
                })
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
      }
    })

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