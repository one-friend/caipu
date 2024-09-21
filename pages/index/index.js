Page({  
  data: {  
    items: []  
  },  
  onShow(){
    let defult = {icon: '../../image/eat_icon.png', title: '默认菜单', defult: true };
    let list = wx.getStorageSync('menuList') || [];
    list.unshift(defult);
    this.setData({
      items: list
    })
  },
  // 添加项目的函数  
  addItem: function() {  
    wx.navigateTo({
      url: '/pages/creat/index',
    })
  },  
    
  // 假设的进入详情的函数（这里只是打印日志，实际开发中需要实现导航）  
  navigateToDetail: function() {  
    console.log('进入详情页面');  
    wx.navigateTo({
      url: '/pages/menus/index',
    })
    // 使用 wx.navigateTo 或其他导航 API 实现页面跳转  
  },
  edit(e){
    const i = e.currentTarget.dataset.inx;
    wx.navigateTo({
      url: '/pages/edit/index?inx=' + i,
    })
  }
});