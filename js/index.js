
$(function(){

    // 导航栏渲染数据
    $.ajax({
        type:'get',
        url:url+'getindexmenu',
        dataType:'json',
        success:function(info){
            console.log(info);
            var str = template('navTmp',info);
            $('.nav').html(str);
            $('.mmm_nav li:nth-last-child(-n+4)').addClass('special');
          //  console.log( $('.nav li:nth-child(8)').attr('href'));
            $('.nav li:nth-child(8) a').attr('href','javascript:;');
        }
    })
  $(".mmm_nav").on("click",".nav li:nth-child(8)",function(){
    $('.mmm_nav li:nth-last-child(-n+4)').slideToggle('special');
  })
   
//   超值折扣渲染数据
  $.ajax({
    type:'get',
    url:url+'getmoneyctrl',
    dataType:'json',
    success:function(info){

      commit(info);
      console.log(info);
      var str = template('discountTmp',info);
      $('#discount').html(str);

    }
  })
 
})