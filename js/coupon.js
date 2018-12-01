

$(function(){
    $.ajax({
        type:'get',
        url:url+'getcoupon',
        dataType:'json',
        success:function(info){
            console.log(info);
            var str = template('tmp',info);
            $('.coupon').html(str);
        }
    })

   $('.content').on('click','.coupon li',function(){
       var id = $(this).data('id');
       console.log(id);
    location.href = 'getcouponproduct.html?couponid='+id;
   })
})