// pages/5/lwj.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    count: 0,
    page: 4,
    height: 700,
    loading: true,

    arr: [{
        "title": "代付款",
        "img": "./imges/tu_10.jpg"
      },
      {
        "title": "代成团",
        "img": "./imges/tu_12.jpg"
      },
      {
        "title": "代发货",
        "img": "./imges/tu_14.jpg"
      },
      {
        "title": "代收货",
        "img": "./imges/tu_16.jpg"
      },
      {
        "title": "售后服务",
        "img": "./imges/tu_18.jpg"
      },
    ],
    arr1: [{
        "title": "优惠券",
        "img": "./imges/start_03.jpg"
      },
      {
        "title": "完币",
        "img": "./imges/start_06.jpg"
      },
      {
        "title": "vip",
        "img": "./imges/start_08.jpg"
      },
      {
        "title": "礼物",
        "img": "./imges/start_11.jpg"
      },
      {
        "title": "收藏",
        "img": "./imges/start_17.jpg"
      },
      {
        "title": "好物星探",
        "img": "./imges/start_18.jpg"
      },
      {
        "title": "地址",
        "img": "./imges/start_20.jpg"
      },
      {
        "title": "客服",
        "img": "./imges/start_22.jpg"
      },
      {
        "title": "意见反馈",
        "img": "./imges/start_27.jpg"
      },
      {
        "title": "关于我们",
        "img": "./imges/start_28.jpg"
      },
    ],
    list: [],
    ff: true


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    let url = "https://suyuhao007.gitee.io/datajson/product_data.json"
    wx.request({
      url: url,
      method: "GET",
      success: (res) => {
        console.log(res)
        if (res.statusCode == 200) {
          that.setData({
            list: res.data.result.splice(this.data.count, this.data.page)
          })
        }
      }

    })
  },

  down() {
    if (this.data.ff) {
      wx.showLoading()
      wx.getSystemInfo({
        success: (res) => {
          this.setData({
            height: res.windowHeight,
            ff: false
          })
        }
      })
      wx.request({
        url: "https://suyuhao007.gitee.io/datajson/product_data.json",
        method: "GET",
        success: (res) => {
          let count = this.data.count + 4
          let page = this.data.page + 4
          var ll = res.data.result.slice(count, page);
          ll.forEach((v, k) => {
            this.data.list.push(v);
          });
          if (res.statusCode == 200) {
            this.setData({
              count: count,
              page: page,
              list: this.data.list,
              ff: true,
            })
            wx.hideLoading()
          }
        }

      })

      console.log("到低部了")
    }

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})