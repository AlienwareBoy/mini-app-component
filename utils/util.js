function chooseAddresss() {
  return new Promise((resolve, reject) => {
    wx.chooseAddress({
      success(res) {
        resolve(res)
      }
    })
  })
}

function MiniApi(name, obj) {
  switch (name) {
    case 'showModel':
      return showModal(obj)
  }
}

function openSetting() {
  return new Promise((resolve, reject) => {
    wx.openSetting({
      success(res) {
        resolve(res)
      }
    })
  })
}

function showModal(obj) {
  console.log(obj)
  let options = {
    title: obj.title == undefined ? '温馨提示' : obj.title,
    content: obj.content == undefined ? '温馨提示' : obj.content,
    showCancel: obj.showCancel == undefined ? '温馨提示' : obj.content,
  }
  for (let i in options) {
    if (options[i] != obj[i]) {
      obj[i] = options[i]
    }
  }
  console.log(obj)
  return new Promise((resolve, reject) => {
    wx.showModal({
      title: obj.title,
      content: obj.content,
      showCancel: obj.showCancel,
      success(res) {
        if (res.confirm) {
          resolve('点击确定')
        } else if (res.cancel) {
          reject('点击失败')
        }
      }
    })
  })
}
module.exports = {
  chooseAddresss,
  MiniApi,
  openSetting
}