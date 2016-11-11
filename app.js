//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this;
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo;
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      });
    }
  },
  globalData:{
    userInfo:null
  },
  getdata:function(f){
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
  }

})
