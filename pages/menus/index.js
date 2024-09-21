import { cutMenus } from '../../utils/menus.js'
Page({  
  data: {  
    names: [], // 名字列表  
    currentName: '菜单1', // 当前展示的名字  
    currentId: -1, //当前展示菜单id
    namesShown: [], // 已经展示过的名字列表  
  },  
  onLoad(){
    this.setData({
      names: cutMenus()
    })
  },
  startRollCall: function() {  
    // 重置已展示的名字列表  
    this.setData({  
      namesShown: [],  
      currentName: '',  
    });  

    // 随机点名逻辑  
    const names = this.data.names;  
    let remainingNames = [...names]; // 剩余未展示的名字列表  
    let interTime = 400
    // 逐个随机展示名字，直到全部展示完毕  
    let intervalId = setInterval(() => {  
       
      if (remainingNames.length === 0) {  
        // 所有名字都已展示，随机选择一个名字作为最终点名结果  
        const finalName = names[Math.floor(Math.random() * names.length)];  
        this.setData({ currentName: finalName.name,currentId: finalName.id });  
        clearInterval(intervalId); // 清除定时器  
      } else {  
        interTime = remainingNames.length >= (names.length / 2) 
        ? (remainingNames.length / names.length) * 400
        : (names.length / ((names.length / 2) - remainingNames.length)) * 400
        // 随机选择一个名字展示  
        const index = Math.floor(Math.random() * remainingNames.length);  
        const name = remainingNames[index];  
        this.setData({ currentName: name.name, currentId: name.id });  
        remainingNames.splice(index, 1); // 从剩余列表中移除已展示的名字  
        this.data.namesShown.push(name); // 添加到已展示的名字列表中（这里实际上可以省略，因为后续不再使用）  
      }  
    }, interTime); // 假设每500毫秒切换一个名字  
  },  
});