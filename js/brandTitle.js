$(function(){
    $.ajax({
        type:'get',
        url:url+'getbrandtitle',
        dataType:'json',
        success:function(info){
            console.log(info);
            var htmlStr = template('titleTmp',info);
            $('.info').html(htmlStr); 

        }
    })
   

 
  $('.info').on('click','.title >li >a',function(){
    var brandtitleid = $(this).data('id');  
    location.href = 'brand.html?brandtitleid=' + brandtitleid;
      
  })

  

})