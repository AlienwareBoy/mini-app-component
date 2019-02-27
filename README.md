
自述
1.自用组件库
=======
# 使用之前
  使用者需要先熟悉[微信小程序自定义组件](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/) 的相关操作
  # 目录
    ## 功能组件
    ### 图片上传
    1. 核心逻辑 小程序图片上传只能一张一张的上传，这是无法修改的，但是我们可以通过Promise，所有图片都上传完了之后统一再处理，此处利用了Promise.all
     ### 使用微信自带的地址
    1. 需要通过getSetting提前获取授权判断是否同意获取地址
    2. 不同意则用wx.openSetting,该接口需要用button触发,有两种方式,open-type,还有一种是点击后 就可以触发openSetting,



* 如果有朋友想要一起加入的，可以玩一下，认识朋友，欢迎提出问题，865041357@qq.com,后面我会慢慢完善其他的模块

