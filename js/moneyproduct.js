

$(function(){

   var id =  getSearch("productid");
//    console.log(id);
$.ajax({
    type:'get',
    url:url+'getmoneyctrlproduct',
    dataType:'json',
    data:{
        productid:id,
    },
    success:function(info){
        console.log(info);
        var str = template('tmp',info);
        $('.content').html(str);
    }
})
})