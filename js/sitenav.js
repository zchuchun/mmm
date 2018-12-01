

$(function(){
    $.ajax({
        type:'get',
        url:url+'getsitenav',
        dataType:'json',
        success:function(info){
            console.log(info);
            var str = template('tmp',info);
            $('.shop').html(str);
        }
    })
})