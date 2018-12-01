

$(function(){
   var brandtitleid =  getSearch("brandtitleid");
   $.ajax({
       type:'get',
       dataType:'json',
       url:url+'getbrand',
       data:{
        brandtitleid:brandtitleid, 
       },
       success:function(info){
           console.log(info);
           var str = template('rankTmp',info);
           $('.ranking1').html(str);
           $('.ranking1 li:nth-child(1) a .img').css('backgroundColor','red');
           $('.ranking1 li:nth-child(2) a .img').css('backgroundColor','#FF9314');
           $('.ranking1 li:nth-child(3) a .img').css('backgroundColor','#8ADF5B');
       }
   })
var img;
var title;
   var pagesize;
   var productid;
   $.ajax({
       type:'get',
       url:url+'getbrandproductlist',
       data:{
        brandtitleid:brandtitleid,
        pagesize:pagesize || 4,
       },
       success:function(info){
           console.log(info);
           var str1 = template('listTpl',info);
           $('.category').html(str1);
           productid =  $('.category li:nth-child(1) a').data('id');
           renderCommit();
       }
   })
  

   $('.category').on('click','li a',function(){
    productid = $(this).data('id');
    console.log(productid);
    location.href = "productDetails.html?productid=" + productid;

   })

  function renderCommit(){
    $.ajax({
        type:'get',
        dataType:'json',
        url:url+'getproductcom',
        data:{
         productid:productid ,
        },
        success:function(info){
        //  console.log(info);
         var img = $('.category .img').html();
         var title = $('.category .get').html();
      
         info.result.img = img;
         info.result.title = title;

            console.log(info);
         var str2 = template('commitTmp',info);
         $('.cc').html(str2);
        

        }
    })
  }
})