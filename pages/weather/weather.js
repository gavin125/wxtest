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
    that.getnow(function(d){
      d.now.cond.src="http://files.heweather.com/cond_icon/"+d.now.cond.code+".png"
      that.setData({basic:d.basic,now:d.now})//更新数据
    })
    that.getsuggestion(function(d){
      that.setData({suggestion:d.suggestion})//更新数据
    })
  	console.log(that.data)
  },
  //获取当前天气API
  getnow:function(f){
    wx.request({
      url: 'https://free-api.heweather.com/v5/now', 
      data: {
        city:'CN101010100',
        key:'01a7798b060b468abdad006ea3de4713'
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        f(res.data.HeWeather5[0]);
      }
    })
  },
  //获取生活指数API
  getsuggestion:function(f){
    wx.request({
      url: 'https://free-api.heweather.com/v5/suggestion', 
      data: {
        city:'CN101010100',
        key:'01a7798b060b468abdad006ea3de4713'
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        f(res.data.HeWeather5[0]);
      }
    })
  }
  
})

