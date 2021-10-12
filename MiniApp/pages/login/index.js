
const md5 = require("../../utils/md5")
const initState = {
  account: "",
  userId: "",
  isLogin: false,
  imToken: "",
  passport: '',
  appkey: '' // 需要您的应用AppKey
}
Page({
  data: initState,

  /**
   * 生命周期函数--监听页面加载
   * @param {*} options 配置项
   */
  onLoad: function (options) {
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () { },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.setKeepScreenOn({
      keepScreenOn: true,
    });
    this.setData(initState)
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () { },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () { },
  toLogin() {
    const { account, imToken, appkey } = this.data
    if (!account || !imToken) {
      wx.showToast({
        title: "请输入账号密码",
        icon: 'none',
        duration: 2000,
        mask: false,
      });
      return
    }
    wx.navigateTo({
      url: `/pages/beforeCall/index?account=${account}&imToken=${imToken}&appkey=${appkey}`,
    })
  },

  changeHandler(e) {
    const type = e.currentTarget.dataset.type
    if (type === 'account') {
      this.setData({
        account: e.detail.value
      })
    }
    else if (type === 'passport') {
      this.setData({
        passport: e.detail.value,
        imToken: md5(e.detail.value)
      })
    }
    else if (type === 'appkey') {
      this.setData({
        appkey: e.detail.value
      })
    }
  }
})
