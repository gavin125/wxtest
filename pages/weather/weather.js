//weather.js
//获取应用实例
var app = getApp()
Page({
  data:{
    basic:"",
    now:"",
    suggestion:""
  },//默认数据
  onLoad: function () {
    var that = this;
    console.log(that);
    app.getnow(function(d){
      that.setData({basic:d.basic,now:d.now})//更新数据
    })
    app.getsuggestion(function(d){
      that.setData({suggestion:d.suggestion})//更新数据
    })
  	console.log(that.data)
  }
  
})

