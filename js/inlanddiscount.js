

$(function(){
    $.ajax({
        type:'get',
        url:url+'getinlanddiscount',
        dataType:'json',
        success:function(info){
            console.log(info);
            info.result.forEach(function(v,i){
                v.productImg = v.productImg.replace('src','data-original');
            })
        //    info.result[10].productImg =  info.result[10].productImg.replace('src','data-original');
            var str = template('tmp',info);
            $('.discount').html(str);

            $('.img img').attr('class','lazy');
            $('.img img').attr('width','175');
            $('.img img').attr('height','175');
            
            $('.img img.lazy').lazyload({
                placeholder:"./images/timg.gif",
            })

        }
    })

    $('.content').on('click','.discount li a',function(){
    var id = $(this).data("id");
    // console.log(id);
    location.href = "discountProduct.html?productid=" + id;
    })
})