//weather.js
//获取应用实例
var app = getApp()
Page({
  data:{
    cur_id:app.curid,
    basic:"",
    now:"",
    suggestion:""
  },//默认数据
  onLoad: function (e) {
    var that = this;
    that.getnow(function(d){
      d.now.cond.src="http://files.heweather.com/cond_icon/"+d.now.cond.code+".png";
      
      that.setData({basic:d.basic,now:d.now})//更新数据
    })
    that.getsuggestion(function(d){
      that.setData({suggestion:d.suggestion})//更新数据
    })
  },
  onShow:function(){
    var that = this;
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 10000
    })
    that.getnow(function(d){
      wx.hideToast()
      d.now.cond.src="http://files.heweather.com/cond_icon/"+d.now.cond.code+".png";
      
      that.setData({basic:d.basic,now:d.now})//更新数据
    })
    that.getsuggestion(function(d){
      that.setData({suggestion:d.suggestion})//更新数据
    })},
  //获取当前天气API
  getnow:function(f){
    wx.request({
      url: 'https://free-api.heweather.com/v5/now', 
      data: {
        city:app.curid,
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
        city:app.curid,
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
  //点击当前城市跳转到设置城市页
  bindViewTap:function(){
    wx.switchTab({url: '../city/city'})
  },
  showcurid:function(){
    console.log(app.curid)
    
  }
  
})

