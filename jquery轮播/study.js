/* Created by Administrator on 2016/3/3 0003*/
$(function(){
    var stuImgNum = $('.study_banner .bd li').size();
    var ImgN = 0;

    /*×óÓÒÇÐ»»*/
    function stuSlide(){
        $(".study_banner .hd ul li").eq(ImgN).addClass("on").siblings().removeClass("on");
        $(".study_banner .bd ul li").eq(ImgN).fadeIn(200).siblings().fadeOut(200);
    }

    /*Î²Ò³Ê×Ò³ÇÐ»»*/
    function stuN(){
        ImgN ++;
        if(ImgN>stuImgNum-1){ImgN=0}
    }
    function stuP(){
        ImgN --;
        if(ImgN<0){ImgN=stuImgNum-1};
    }
    /*ÏÂÒ»Ò³*/
    $('.next').click(function(){
        stuN();
        stuSlide();
    });
    /*ÉÏÒ»Ò³*/
    $('.prev').click(function(){
        stuP();
        stuSlide();
    });
    /*Ô²µãÇÐ»»*/
    $(".study_banner .hd li").on('click', function() {
        ImgN = $(this).index();
        stuSlide();
    });
    /* ×Ô¶¯ÇÐ»» */
    var clock=setInterval(page,5000);
    function page(){
        stuN();
        stuSlide();
    }
    $(".study_banner").hover(function(){
            clearInterval(clock);
        },
        function(){
            clock=setInterval(page,5000);
        }
    );

});