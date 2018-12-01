

$(function(){

        var id = getSearch("productid");
        
    $.ajax({
        type:'get',
        url:url+'getdiscountproduct',
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