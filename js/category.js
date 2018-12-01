

$(function(){
    $.ajax({
        type:'get',
        url:url+'getcategorytitle',
        dataType:'json',
        success:function(info){
            console.log(info);
            var htmlStr = template('titleTmp',info);
            $('.info').html(htmlStr);
      
           

        }

    })
   

   var id;
   var i = 0;
  $('.info').on('click','.title >li >a',function(){
      i++;
        id = $(this).data('id');
      $(this).parent().addClass('current');
      $(this).parent().siblings().removeClass('current');
      
       
        $.ajax({
            type:'get',
            url:url+'getcategory',
            dataType:'json',
            data:{
                titleid:id,
            },
            success:function(info){
                console.log(info);
                var htmlStr = template('cateTmp',info);
                $('.current .cate').html(htmlStr);
               if(i%2==0){
                   $(".current .cate").empty();
               }
                
          
            }
        })
  })

  $('.info').on('click','.cate li a',function(){
      var categoryid = $(this).data('cate');
      location.href = 'productlist.html?categoryid=' + categoryid;
  })

})