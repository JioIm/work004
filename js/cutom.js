$(function () {

    $('.MainVisual .VisualSlide').slick({
        pauseOnHover: false,
        autoplaySpeed: 4000,
        arrows: false,
        autoplay: true,
    });

    $('.tab_menu li a').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).parent().index();
        $('.tab_content li').removeClass('on');
        $('.tab_content li').eq(idx).addClass('on');
    });

    // $('.tab_slide').slick()

    // $('.MainContent .tab_left_slide').slick({
    //     slidesToShow: 4,
    //     //fade: true,
    //     arrows: false,
    //     variableWidth: true,
    //     autoplay: true,
    //     //speed:0,
    //     // asNavFor:'.MainContent .tab_left_slide',
    // });

    new Swiper('.mm', {
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    })



    // $('.MainContent .tab_left_slide').on('beforeChange', function(e,s,c){
    // $('.tab_left_slide figure').eq(c+5).addClass('on').siblings().removeClass('on')
    // })
    // $('.MainContent .tab_right_slide').slick({
    //     arrows: false,
    //     slidesToShow: 4,
    //     asNavFor:'.MainContent .tab_right_slide',
    // })

    $('.MainContent .bt_left').on('click', function () {
        $('.MainContent .tab_left_slide').slick('slickPrev');
    });
    $('.MainContent .bt_right').on('click', function () {
        $('.MainContent .tab_right_slide').slick('slickNext');
    });

    $('.toTop').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1000)
    });

    $(window).on('scroll', function () {
        const sct = $(window).scrollTop();
        if (sct > 200) {
            $('.toTop').addClass('on');
        } else {
            $('.toTop').removeClass('on');
        }
    });
});



