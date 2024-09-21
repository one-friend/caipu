Page({  
  data: {  
    title: '',  
    contentList: [
      {
        name: '示例1：宫保鸡丁'
      },
      {
        name: '示例2：醋溜丸子'
      },
      {
        name:''
      }
    ] 
  },  
  
  bindTitleInput: function(e) {  
    this.setData({  
      title: e.detail.value  
    });  
  },  
  
  completeInput: function() {  
    // 存储到本地，这里使用 wx.setStorageSync  
    let list = wx.getStorageSync('menuList') || [];
    list.push({title:  this.data.title, contentList: this.data.contentList})
    wx.setStorageSync('menuList', list);  
    // 可以在这里添加其他逻辑，如页面跳转、提示等  
    wx.showToast({  
      title: '内容已保存',  
      icon: 'success',  
      duration: 2000  
    }); 
    let timer = setTimeout(()=>{
      clearTimeout(timer)
      wx.navigateTo({
        url: '/pages/index/index',
      })
    },1000) 
    
  },

  changeName(e){
    const i = e.currentTarget.dataset.inx;
    const name = e.detail.value;
    let {contentList} = this.data;
    contentList[i].name = name;
    this.setData({
      contentList
    })
  },

  addItem(e){
    let { contentList } = this.data;
    contentList.push({
      name:''
    })
    this.setData({
      contentList
    })
  },

  delItem(e){
    let { contentList } = this.data;
    const i = e.currentTarget.dataset.inx;
    contentList.splice(i,1)
    this.setData({
      contentList
    })
  }
});