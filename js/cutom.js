$(function () {

    $('#main').fullpage({
        anchors: ["p1", "p2", "p3", "p4", "p5"],
        menu: '#custom_nav',
        scrollOverflow: false,
        navigation: true,
        afterLoad: function (anchorLink, index) {
            console.log(anchorLink, index);
            if (index == 2 || index == 3) {
                if (!$('.Gnb').hasClass('on')) {
                    $('.Header').addClass('on')
                }
            } else {
                $('.Header').removeClass('on')
            }

            if (index == 4) {
                $('.Header').hide();
            } else {
                $('.Header').show();
            }
            $('#custom_nav li').removeClass('active');
            $('#custom_nav li[data_menuanchor="' + anchorLink + '"]').addClass('active');
        },


        responsiveWidth: 768,
        responsiveHeight: 800,

    });

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

    $('.tab_menu li a').on('click', function () {
        $('.tab_menu li').removeClass('on');
        $(this).parent().addClass('on');
    });


    const mm = new Swiper('.mm', {
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
        // },
    });








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



