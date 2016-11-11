//weather.js
//获取应用实例
var app = getApp()
Page({
  data: {},
  bindViewTap:function(){
    console.log("111")
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    app.getdata(function(data){
      //更新数据
      that.setData(data)
      console.log(data)
    })
  	
  }
  
})

