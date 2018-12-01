$(function(){
    

    var currentPage = 1;
    $.ajax({
        type:'get',
        url:url+'getmoneyctrl',
        data:{
            pageid:currentPage,
        },
        success:function(info){
            // console.log(info);
            totalPage = Math.ceil(info.totalCount/info.pagesize);
            commit(info);
            console.log(info);
            var str= template('listTpl',info);
            $('#save').html(str);
            var str2 = '';
            for(var i =1;i<= totalPage;i++){
                str2 += "<option value='"+ i +"'>"+ i+ "/" + totalPage +" </option>";
            }
            $('.select select').html(str2);
           

        }

    })

   
    
    function renderPage(){
        $.ajax({
            type:'get',
            url:url+'getmoneyctrl',
            data:{
                pageid:currentPage,
            },
            success:function(info){
                console.log(info);
                var str= template('listTpl',info);
                $('#save').html(str);
                
               
            }
    
        })
    }


$('select').on('change',function(){
    var text = $('select option:selected').attr('value');
    currentPage = text;
    console.log(currentPage);
   renderPage();
    
})


//点击渲染上一页
$('.prev').click(function(){
  
   if(currentPage <=1){
       return false;
   }
   currentPage--;
  $('select').val(currentPage);
   renderPage(currentPage);
})

//点击渲染下一页
$('.next').click(function(){
   if(currentPage >= totalPage){
       return false;
   }
   currentPage++;
  $('select').val(currentPage);
   renderPage(currentPage);
    
})



$('.info').on('click','#save li a',function(){
    var id = $(this).data("id");
    // console.log(id);
    location.href = 'moneyproduct.html?productid='+id;

})
})