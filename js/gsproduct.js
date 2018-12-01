

$(function(){
    $.ajax({
        type:'get',
        url:url+'getgsshop',
        dataType:'json',
        success:function(info){
            console.log(info);
            var str = template('shopTmp',info);
            $('.firstin').html(str);
        }
    })

    $('.firstout').on('click',function(){
        $('.firstin').slideToggle();
    })

    $.ajax({
        type:'get',
        url:url+'getgsshoparea',
        dataType:'json',
        success:function(info){
            console.log(info);
            var str1 = template('areaTmp',info);
            $('.secondin').html(str1);
        }
    })

    $('.secondout').on('click',function(){
        $('.secondin').slideToggle();
    })

    var shopid = 0;
    var areaid = 0;
    
    listRnder();
    function listRnder(){
        $.ajax({
            type:'get',
            url:url+'getgsproduct',
            data:{
                shopid:shopid,
                areaid:areaid,
            },
            dataType:'json',
            success:function(info){
                console.log(info);
                var str2 = template('listTmp',info);
                $(".info").html(str2);
            }
    
        })
    }

   $('.firstin').on('click','li',function(){
       shopid = $(this).data('id');
       var txt = $(this).text();
       console.log(txt);
       $('.text1').text(txt)
       $(this).find('i').css('display','block');
       $(this).siblings().find('i').css('display','none');
       console.log(shopid);
       listRnder();
       $('.firstin').slideToggle();

   })
   $('.secondin').on('click','li',function(){
    areaid  = $(this).data('id');
    var txt = $(this).text();
    txt = txt.slice(0,2);
    console.log(txt);
    $('.text2').text(txt)
    $(this).find('i').css('display','block');
    $(this).siblings().find('i').css('display','none');
    listRnder();
    $('.secondin').slideToggle();

})
}) 