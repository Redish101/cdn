
    /**
 * Unix时间戳转换为当前时间多久之前
 * @param timespan int     Unix时间戳
 * @return timeSpanStr string   转换之后的前台需要的字符串
 */
function Ftime (timespan) {
  var dateTime = new Date(timespan * 1000);
  var year = dateTime.getFullYear();
  var month = dateTime.getMonth() + 1;
  var day = dateTime.getDate();
  var hour = dateTime.getHours();
  var minute = dateTime.getMinutes();
  //当前时间
  var now = Date.parse(new Date()); //typescript转换写法
  var milliseconds = 0;
  var timeSpanStr;
  //计算时间差
  milliseconds = (now / 1000) - timespan;

  //一分钟以内
  if (milliseconds <= 60) {
    timeSpanStr = '刚刚';
  }
  //大于一分钟小于一小时
  else if (60 < milliseconds && milliseconds <= 60 * 60) {
    timeSpanStr = Math.ceil((milliseconds / (60))) + '分钟前';
  }
  //大于一小时小于等于一天
  else if (60 * 60 < milliseconds && milliseconds <= 60 * 60 * 24) {
    timeSpanStr = Math.ceil(milliseconds / (60 * 60)) + '小时前';
  }
  //大于一天小于等于15天
  else if (60 * 60 * 24 < milliseconds && milliseconds <= 60 * 60 * 24 * 30) {
    timeSpanStr = Math.ceil(milliseconds / (60 * 60 * 24)) + '天前';
  }
  //大于一个月小于一年
  else if (60 * 60 * 24 * 30 < milliseconds && milliseconds <= 60 * 60 * 24 * 30 * 12){
    timeSpanStr = Math.ceil(milliseconds / (60 * 60 * 24 * 30)) + '个月前';
  }
  //超过一年显示
  else {
    timeSpanStr = year + '年' + month + '月' + day + '日 ' + hour + ':' + minute;  
  }
  return timeSpanStr;
} 
var httpRequest = new XMLHttpRequest();//第一步：建立所需的对象
        httpRequest.open('GET', 'https://www.qexo101.tk/pub/last/', true);//第二步：打开连接  将请求参数写在url中  ps:"./Ptest.php?name=test&nameone=testone"
        httpRequest.send();//第三步：发送请求  将请求参数写在URL中
        /**
         * 获取数据后的处理程序
         */
        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState == 4 && httpRequest.status == 200) {
                var json = httpRequest.responseText;//获取到json字符串，还需解析
                //console.log(json);
                //document.write(json);
                var utime = JSON.parse(json)
                //console.log(utime.msg)
                var past = Ftime(utime.msg)
                document.write(past)
            }
        };