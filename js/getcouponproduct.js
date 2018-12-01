

$(function(){
   var id =  getSearch('couponid');
   
   $.ajax({
       type:'get',
       url:url+'getcouponproduct',
       data:{
        couponid:id,
       },
       success:function(info){
           info.result.forEach(function(v,i){
               var temp = v.couponProductImg.split(' ')[1];
              temp = temp.split("src=")[1].slice(1).slice(0,-1);
            //   console.log(temp);
              info.result[i].imgSrc = temp;
           })

           var htmlStr = template('tmp',info);
           $('.coupon').html(htmlStr);

           var htmlStr1 = template('swiperTmp',info);
           $('.swiper-wrapper').html(htmlStr1);
           console.log(info);


        //    点击显示模态框
           $('.content').on('click','.coupon li',function(){
            var id = $(this).data('id');
            $('.box').css('display','block');
            var mySwiper = new Swiper ('.swiper-container', {
                loop: true, // 循环模式选项
                initialSlide:id,
                // 如果需要前进后退按钮
                navigation: {
                  nextEl: '.s_right',
                  prevEl: '.s_left',
                },
                
            
              })        
       })
    

    //    点击关闭
          $('.close').click(function(){
          $('.box').css('display','none');
       })
           
           
       }
   })

  


})