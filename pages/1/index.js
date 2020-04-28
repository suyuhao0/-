<<<<<<< HEAD
//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
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
    } else if (this.data.canIUse){
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
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
=======
// pages/3/lak.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current:0,
    arr:[
      {"title":"WOW"},
      {"title":"个护健康"},
      {"title":"手机数码"},
      {"title":"家居日用"},
      {"title":"家用家电"},
      {"title":"服饰鞋靴"},
      {"title":"精品箱包"},
      {"title":"食品饮料"},
      {"title":"首饰配饰"},
    ],
    list:[
      {"img":"img/tu1.jpg"},
      {"img":"img/tu2.jpg"},
      {"img":"img/tu3.jpg"},
      {"img":"img/tu4.jpg"},
      {"img":"img/tu5.jpg"},
      {"img":"img/tu6.jpg"},
    ],
    bo:[
      {"title":"正品保证","img":"img/qr.png"},
      {"title":"七天退换","img":"img/qr.png"},
      {"title":"急速退款","img":"img/qr.png"},
      {"title":"全场包邮","img":"img/qr.png"},
    ],
    tab:[
      {"title":"签到","img":"img/qd.png"},
      {"title":"查物流","img":"img/wl.png"},
      {"title":"VIP","img":"img/vip.png"},
      {"title":"近期热文","img":"img/rw.png"},
      {"title":"企业购","img":"img/gwc.png"}
    ],
    con:[
      {"txt":"领300元","txt1":"新人大礼包","img":"img/lbo.png","txt2":"立即领取"}
    ],
    con1:[
      {"txt1":"新人专享","img":"img/tu6.jpg","jg":"￥59.9","sjg":"￥99","txt2":"【新人专享价】超吸水不掉毛有效抗菌的蜂窝"},
      {"txt1":"新人专享","img":"img/tu7.jpg","jg":"￥59.9","sjg":"￥99","txt2":"【新人专享价】防脱育发强韧发丝的意大利洗"}
    ],
    con2:[
      {"txt1":"好物秒杀","img":"img/tu4.jpg","txt2":"经典classic设计超强收纳的百搭...","txt3":"抢购进行中","txt4":"秒杀价","txt5":"￥259","txt6":"￥279","txt7":"立即抢购","txt8":"1件秒杀>"}
    ]
  },
  // 导航栏下划线
  item(e){
    let {index} = e.currentTarget.dataset;
    console.log(index)
    this.setData({
      current:index
    })
  },
  // 失败的滑动导航栏
  switchNav(e){
    var cur = event.currentTarget.dataset.current; 
    //每个tab选项宽度占1/5
    var singleNavWidth = this.data.windowWidth / 5;
    //tab选项居中                            
    this.setData({
        navScrollLeft: (cur - 2) * singleNavWidth
    })      
    if (this.data.currentTab == cur) {
        return false;
    } else {
        this.setData({
            currentTab: cur
        })
    }
},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
>>>>>>> fb7011a914dcbb5848e830418eb99ed3de13f06c
