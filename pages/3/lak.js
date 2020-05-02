// pages/3/lak.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow:true,
    isHide:false,
    arrIndex:0,
    gitIndex:0,
    arr:[{id:1,title:'每日精选',},{id:2,title:'近期热文'}],
    list:[
      {
        id:1,
        name:"高 大 上！半透明黑科技音响，你没见过",
        label1:"数码产品",
        label2:"蓝牙音响",
        label3:"简约设计",
        img:"./image/mr-1.png"
      },
      {
        id:2,
        name:"AirPods Pro 平价代替？开盒秒连，30小时续航，价格感人",
        label1:"耳机",
        label2:"平价代替",
        img:"./image/mr-2.png"
      },
      {
        id:3,
        name:"「断货王」香水，大牌调香师实力打造，香味高级，男女通用",
          label1:"大牌调香师",
        label2:"8款香味",
        img:"./image/mr-3.png"
      },
      {
        id:4,
        name:"这件基本款，时髦又高级，和无良印品通厂，价格不到它的1/2",
          label1:"时髦",
        label2:"无印良品同厂",
        label3:"质感超好",
        img:"./image/mr-4.png"
      },
      {
        id:5,
        name:"耳勺界的黑科技，外国人也在吹这跟东方「小棒棒」，边用边...",
        label1:"年度好物",
        label2:"采耳棒",
        label3:"可视化",
        img:"./image/mr-1.png"
      }
    ],
    list2:[
      {
        id:1,
        age:"No.1",
        name:"AirPods Pro 平价代替？开盒秒连，30小时续航，价格感人",
        label1:"耳机",
        label2:"平价代替",
        img:"./image/mr-2.png"
      },
      {
        id:2,
        age:"No.2",
        name:"「断货王」香水，大牌调香师实力打造，香味高级，男女通用",
          label1:"大牌调香师",
        label2:"8款香味",
        img:"./image/mr-3.png"
      },
      {
        id:3,
        age:"No.3",
        name:"这件基本款，时髦又高级，和无良印品通厂，价格不到它的1/2",
          label1:"时髦",
        label2:"无印良品同厂",
        label3:"质感超好",
        img:"./image/mr-4.png"
      },
      {
        id:4,
        age:"No.4",
        name:"耳勺界的黑科技，外国人也在吹这跟东方「小棒棒」，边用边看爽到飞起",
        label1:"年度好物",
        label2:"采耳棒",
        label3:"可视化",
        img:"./image/mr-2.png"
      },
      
      
      
      {
        id:5,
        age:"No.5",
        name:"高 大 上！半透明黑科技音响，你没见过",
        label1:"数码产品",
        label2:"蓝牙音响",
        label3:"简约设计",
        img:"./image/mr-1.png"
      }
    ]
  },
  click(e){
    console.log(e.currentTarget.dataset.index)
    let i = e.currentTarget.dataset.index
    let show = this.data.isShow=!this.data.isShow
    let hide = this.data.ifHide=!this.data.ifHide
    this.setData({
      arrIndex:i,
      isShow : show,
      isHide : hide
    })
  },
  // 进入详情页
  gitInfo(e){
    console.log(e)
    let i = e.currentTarget.dataset.index
    let title = this.data.list[i]
    let str=JSON.stringify(title)
    console.log("str：",str)
    wx.navigateTo({
      url: '/pages/list/list?title=' + str,
    }),
    this.setData({
      gitIndex:i
    })
  },

  gitInfo2(e){
    console.log(e)
    let i = e.currentTarget.dataset.index
    let title = this.data.list2[i]
    let str=JSON.stringify(title)
    console.log("str：",str)
    wx.navigateTo({
      url: '/pages/list/list?title=' + str,
    }),
    this.setData({
      gitIndex:i
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      // console.log(this.data.arr)
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