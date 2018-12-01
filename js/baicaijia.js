
 

$(function(){
   
    var titleid ;

    $.ajax({
        type:'get',
        dataType:'json',
        url:url+'getbaicaijiatitle',
        success:function(info){
            console.log(info);
            var str = template('titleTmp',info);
           $('.nav').html(str);
           var lis = $('.nav').children();
           var width = 0;
           lis.each(function(i,v){
               width += v.offsetWidth;
           })
           $('.nav').css({
               width:width,
           })

           var myScroll = new IScroll('.wrapper', {
            scrollX:true,
         });

         baicai(0);
           
        }
    })

    $('.wrapper').on('click','.nav li',function(){
        titleid = $(this).data('id');
        // console.log(titleid);
        $(this).find('a').addClass('active');
        $(this).siblings().find('a').removeClass('active');

        baicai(titleid);
       
    })
    
   

    function baicai(titleid){
        $.ajax({
            type:'get',
            url:url+'getbaicaijiaproduct',
            dataType:'json',
            data:{
                titleid:titleid,
            },
            success:function(info){
                console.log(info);
                var htmlStr = template('listTmp',info);
                $('.content').html(htmlStr);
            }
        })
    }
   
})