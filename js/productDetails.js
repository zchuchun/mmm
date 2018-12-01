$(function(){

   var productid =  getSearch("productid");
   var productCom = localStorage.getItem("productCom");
  
    $('#pc').text(productCom);
    $.ajax({
        type:'get',
        url:url+'getproduct',
        data:{
            productid:productid,
        },
        dataType:'json',
        success:function(info){
            console.log(info);
            var str1 = info.result[0].productName;
            var arr = str1.split(' ');
            var arr2 = arr.splice(0,1);
            var str2 = arr2.join('');
            info.result[0].cate = str2;
            var str = template('detailTmp',info);
            $('.info').html(str);
           $('#pc').text(productCom);
            
            
        }
    })

    $.ajax({
        type:'get',
        url:url+'getproductcom',
        data:{
            productid:productid,
        },
        success:function(info){
            console.log(info);
            var htmlStr = template('commitTmp',info);
            $('.cm').html(htmlStr);
        }
    })
})