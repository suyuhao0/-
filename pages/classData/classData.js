// pages/classData/classData.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:[],
    seleIndex:0,
    xItem:[]
  },

  onScroll(e){
    let { index } = e.currentTarget.dataset
    console.log(index)
    this.setData({
      seleIndex:index,
      xItem: this.data.user[index].arr
    })
    console.log(this.data.user[this.data.seleIndex])
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var list = JSON.parse(options.nav)
    this.setData({ 
      user: list,
      xItem: list[this.data.seleIndex].arr
    });
    console.log(list[this.data.seleIndex].arr)

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