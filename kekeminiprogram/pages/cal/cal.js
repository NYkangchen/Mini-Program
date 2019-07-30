// pages/cal.js
Page({

  /**
   * Page initial data
   */
  data: {
    operator4:'/',
    operator6:'.',
    operator7:'=',
    operator1:'+',
    operator2:'-',
    operator5:'%',
    operator3:'*',
    operator8:'del',
    id0:'0',
    id1:'1',
    id2:'2',
    id3:'3',
    id4:'4',
    id5:'5',
    id6:'6',
    id7:'7',
    id8:'8',
    id9:'9',
    displayData:'0',
    lastIsOperator: false,
  },
  clickBtn:function(event){
    console.log(event);
    var display=this.data.displayData.toString();
    var id=event.target.id;
    var myData=[];
    if(id==this.data.operator8){//del符号
      var data=display;
      if(data.length==1 ||data==0 ||isNaN(data)){
        data=0;
      }else{
        data = data.substring(0, data.length - 1); 
      }
      this.setData({displayData:data});
    }else if(id==this.data.operator7){//"="显示结果
      //1. 最后一位是符号,无效
      var data=display;
      if(isNaN(data[data.length-1])){
        return;
      } else {
        for(var i=0;i<data.length;i++){
          if (data[i] == this.data.operator1){
            data=parseFloat(data.substring(0,i))+parseFloat(data.substring(i+1,data.length));
          } else if (data[i] == this.data.operator2){
            data = parseFloat(data.substring(0, i)) - parseFloat(data.substring(i + 1, data.length));
          } else if (data[i] == this.data.operator3){
            data = parseFloat(data.substring(0, i)) * parseFloat(data.substring(i + 1, data.length));
          }else if(data[i]== this.data.operator4){
            data = parseFloat(data.substring(0, i)) / parseFloat(data.substring(i + 1, data.length));
          }else if(data[i]== this.data.operator5){
            data = parseFloat(data.substring(0, i)) % parseFloat(data.substring(i + 1, data.length));
          }
        }
      } 
      this.setData({ displayData: data });
    } else {//点击按钮显示内容
      var data;
      if(display==0){
        data=id;
      }else{
        data = display + id;
      }
      console.log("this is data:"+data);
      this.setData({displayData:data});
    }
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})