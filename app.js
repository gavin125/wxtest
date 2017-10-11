//app.js
App({
  //系统事件
  onLaunch: function () {//小程序初始化事件
    var that=this;
    //调用API从本地缓存中获取数据
    that.curid = wx.getStorageSync('curid') || that.curid;//API：获取本地缓存，若不存在设置为全局属性
    that.setlocal('curid', that.curid);//调用全局方法
  },

  /*******************************************************/

  //自定义全局方法
  setlocal:function(id,val){
    wx.setStorageSync(id, val);//API：设置本地缓存
  },
  //自定义全局属性
  curid:"CN101010100",
  version:"1.0"
})
