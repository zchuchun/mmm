

$(function(){

    var id =  getSearch("categoryid");
    // console.log(id);
    var totalPage;

    //分类渲染
    $.ajax({
        type:'get',
        url:url+'getcategorybyid',
        data:{
            categoryid:id,
        },
        success:function(info){
            // console.log(info);
            var str1 = template('cateTpl',info);
            $('#top').prepend(str1);
        }

    })


    var currentPage = 1;
        $.ajax({
            type:'get',
            url:url+'getproductlist',
            data:{
                categoryid:id,
                pageid:currentPage,
            },
            success:function(info){
                console.log(info);
               
                totalPage = Math.ceil(info.totalCount/info.pagesize);
                // console.log(totalCount);
                // console.log(totalPage);
                var str= template('listTpl',info);
                $('.category').html(str);
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
                url:url+'getproductlist',
                data:{
                    categoryid:id,
                    pageid:currentPage,
                },
                success:function(info){
                    console.log(info);
                    var str= template('listTpl',info);
                    $('.category').html(str);
                    
                   
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


//点击跳转到商品详情页
   $('.info').on('click','.category a',function(){
       var productid = $(this).data('id');
       var productCom = $(this).data("pc");
       localStorage.setItem('productCom',productCom);
    //    console.log(productid );
    location.href = 'productDetails.html?productid='+productid;

   })
      
})

