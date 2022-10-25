$(function () {
    $(".banner-section__slider").slick({
        dots: true,
        prevArrow:
            '<button class="banner-section__slider-btn banner-section__slider_sliderprev"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow:
            '<button class="banner-section__slider-btn banner-section__slider__slidenext"><img src="images/arrow-right.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 969,
                settings: {
                    arrows: false,
                },
            },
        ],
    });

    $(".tab").on("click", function (e) {
        e.preventDefault();

        $($(this).siblings()).removeClass("tab--active");
        $($(this).parent().siblings().find("div ")).removeClass(
            "tabs-content--active"
        );

        $(this).addClass("tab--active");
        $($(this).attr("href")).addClass("tabs-content--active");
    });

    $(".product-item__favorite").on("click", function () {
        $(this).toggleClass("product-item__favorite--active");
    });

    $(".product-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow:
            '<button class="product-slider__slider-btn product-slider__slider_sliderprev"><img src="images/arrow-black-left.svg" alt=""></button>',
        nextArrow:
            '<button class="product-slider__slider-btn product-slider__slider__slidenext"><img src="images/arrow-black-right.svg" alt=""></button>',
        responsive: [
            {
                breakpoint: 1301,
                settings: {
                    arrows: false,
                    dots: true,
                },
            },
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 3,
                    dots: true,
                },
            },
            {
                breakpoint: 970,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                },
            },
            {
                breakpoint: 590,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                },
            },
        ],
    });

    $(".menu__btn").on("click", function () {
        $(".menu-mobile__list").toggleClass("menu-mobile__list--active");
    });

    $(".footer__topdrop").on("click", function () {
        $(this).next().slideToggle();
        $(this).toggleClass("footer__topdrop--active");
    });
});
