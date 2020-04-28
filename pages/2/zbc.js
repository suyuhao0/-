// pages/2/zbc.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
<<<<<<< HEAD
    seteIndex:0,
    list:[
      {
        "catename":"各护健康",
        "cateitems":[
          { "name": "鼻腔护理", "img": "" },
          { "name": "面部护理", "img": "" },
          { "name": "按摩保健", "img": "" },
          { "name": "洗发护发", "img": "" },
          { "name": "美容仪器", "img": "" },
          { "name": "纤体塑身", "img": "" },
          { "name": "香水香氛", "img": "" },
          { "name": "身体护理", "img": "" },
          { "name": "口腔护理", "img": "" },
          { "name": "男士护理", "img": "" }
        ]
      },
      {
        "catename": "手机数码",
        "cateitems": [
          { "name": "手机配件", "img": "" },
          { "name": "车载配件", "img": "" },
          { "name": "拍照配件", "img": "" },
          { "name": "电脑配件", "img": "" },
          { "name": "耳机音响", "img": "" },
          { "name": "移动电源", "img": "" }
        ]
      },
      {
        "catename": "家居日用",
        "cateitems": [
          { "name": "清洁用品", "img": "" },
          { "name": "雨伞雨具", "img": "" },
          { "name": "婴童日用", "img": "" },
          { "name": "宠物用品", "img": "" },
          { "name": "装饰摆件", "img": "" },
          { "name": "灯具用品", "img": "" },
          { "name": "文创用品", "img": "" },
          { "name": "运动户外", "img": "" },
          { "name": "床上用品", "img": "" },
          { "name": "杯壶酒具", "img": "" },
          { "name": "收纳用品", "img": "" },
          { "name": "餐厨用品", "img": "" }
        ]
      },
      {
        "catename": "家用电器",
        "cateitems": [
          { "name": "智能电子", "img": "" },
          { "name": "厨房电器", "img": "" },
          { "name": "生活家电", "img": "" }
        ]
      },
      {
        "catename": "服饰鞋靴",
        "cateitems": [
          { "name": "男女鞋", "img": "" },
          { "name": "男女装", "img": "" },
          { "name": "袜子", "img": "" },
          { "name": "女鞋", "img": "" },
          { "name": "男鞋", "img": "" },
          { "name": "内衣裤", "img": "" },
          { "name": "男装", "img": "" },
          { "name": "女装", "img": "" }
        ]
      },
      {
        "catename": "精品箱包",
        "cateitems": [
          { "name": "钱包", "img": "" },
          { "name": "其他箱包", "img": "" },
          { "name": "双肩包", "img": "" },
          { "name": "单肩包", "img": "" },
          { "name": "行李箱", "img": "" }
        ]
      },
      {
        "catename": "食品饮料",
        "cateitems": [
          { "name": "休闲零食", "img": "" },
          { "name": "粮油副食", "img": "" },
          { "name": "茶叶酒水", "img": "" },
          { "name": "咖啡冲饮", "img": "" }
        ]
      },
      {
        "catename": "首饰配饰",
        "cateitems": [
          { "name": "其他配饰", "img": "" },
          { "name": "腰带", "img": "" },
          { "name": "围巾丝巾", "img": "" },
          { "name": "眼镜", "img": "" },
          { "name": "帽子", "img": "" },
          { "name": "手表", "img": "" },
          { "name": "戒指", "img": "" },
          { "name": "首饰套装", "img": "" },
          { "name": "首饰收纳", "img": "" },
          { "name": "耳饰", "img": "" },
          { "name": "手链手镯", "img": "" },
          { "name": "项链吊坠", "img": "" }
        ]
      }
    ],
    items:[],
    title: "各护健康"
  },

  onItem(e) {
    let { index } = e.currentTarget.dataset;
    this.setData({
      title: this.data.list[index].catename,
      seteIndex: index,
      items: this.data.list[index].cateitems
    })
  },

  onList(e){
    console.log(e.currentTarget.dataset.item)
    let str = JSON.stringify(e.currentTarget.dataset.item);
    wx.navigateTo({
      url: '/pages/classData/classData?nav='+str,
    })
=======

>>>>>>> fb7011a914dcbb5848e830418eb99ed3de13f06c
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
<<<<<<< HEAD
    
=======

>>>>>>> fb7011a914dcbb5848e830418eb99ed3de13f06c
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
<<<<<<< HEAD
    console.log(this.data.list)
    this.setData({
      title: this.data.list[this.data.seteIndex].catename,
      items: this.data.list[this.data.seteIndex].cateitems
    })
=======

>>>>>>> fb7011a914dcbb5848e830418eb99ed3de13f06c
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