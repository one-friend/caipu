// pages/edit/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menu: {},
    mindex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options);
    const i = options.inx || 0;
    if(i == 0) {
      //默认菜单，从js取
    }else {
      // 本地菜单
      let list = wx.getStorageSync('menuList');
      this.setData({
        menu: list[(i - 1)],
        mindex: i - 1
      })
    }
  },

  bindTitleInput: function(e) {  
    let { menu } = this.data;
    menu.title = e.detail.value;
    this.setData({  
      menu
    });  
  },  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})