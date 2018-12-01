

var url = "http://192.168.27.28:9090/api/";
 function render(url,tmp,ele){
    $.ajax({
        type:'get',
        url:url,
        dataType:'json',
        success:function(info){
            console.log(info);
            var htmlStr = template(tmp,info);
            $(ele).html(htmlStr);
        
         
        }
    })
  }

  
  // 专门用于解析地址栏参数的方法
function getSearch( k ) {
    // 获取地址栏参数
    var str = location.search;
  
    // 解码成中文, 将地址栏编码后的中文, 进行解码
    str = decodeURI( str );    // "?key=匡威鹏&name=pp&age=18&desc=帅"
  
    // 去掉第一个问号
    // str.slice(start, end)
    // 从start开始, 到end结束,  包含start,不包含end
    // end如果不写, 默认截取到最后
    str = str.slice( 1 );     // "key=匡威鹏&name=pp&age=18&desc=帅"
  
    // split 将字符串分割数组
    var arr = str.split("&");     // ["key=匡威鹏", "name=pp", "age=18", "desc=帅"]
  
    var obj = {};
  
    // 遍历数组, 取出每个键和值
    arr.forEach(function( v, i ) {   // v  "age=18"
      var key = v.split("=")[0];   // 键 age
      var value = v.split("=")[1];  // 值 18
  
      obj[ key ] = value;
    })
  
    return obj[ k ];
  }


  function commit(info){
    info.result.forEach(function(v,i){
        var commit = v.productComCount;
        commit = commit.replace(/\D*/g,"");
        v.commit = commit;
      })
}