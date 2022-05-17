$(document).ready(function () {
    $(".quickLinksWidget h3").click(function () {
        $(this).parent().toggleClass("active");
    }),
        $(".menu_bar").click(function () {
            $(".mobile_menu_box").addClass("active");
        }),
        $(".close_menu").click(function () {
            $(".mobile_menu_box").removeClass("active"), $("body").removeClass("oveflow");
        }),
        $(".close-btn").on("click", function () {
            $(".search-box").addClass("d-none");
        }),
        $(".search_triger").on("click", function () {
            $(".search-box").removeClass("d-none");
        }),
        $(".close_news").click(function () {
            $(this).parent(".mobile_newsConten").addClass("d-none"), localStorage.setItem("close_news", !0);
        });
}),
    $(function () {
        $('[data-toggle="tooltip"]').tooltip(),
            "true" === localStorage.getItem("close_news") ? $("#breaking-news-mobile").addClass("d-none") : $("#breaking-news-mobile").addClass("d-block"),
            setTimeout(function () {
                $(".loding").addClass("d-none");
            }, 5e3);
    }),
    $(window).scroll(function () {
        $(window).scrollTop() >= 5 ? $(".header_area").addClass("sticky") : $(".header_area").removeClass("sticky");
    }),
    $(function () {
        $("#audioPlayer").audioPlayer(), $(".fotorama").fotorama({ allowfullscreen: !0, nav: "thumbs", ratio: "800/600", thumbwidth: "87", thumbheight: "87", auto: !1 });
    });
var swiper = new Swiper("#newsTopSlider", { autoplay: { delay: 5e3 }, navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" } });
(swiper = new Swiper(".mostReadeSlider", {
    autoplay: { delay: 5e3 },
    slidesPerView: 4,
    spaceBetween: 50,
    slidesPerGroup: 2,
    loop: !1,
    loopFillGroupWithBlank: !0,
    pagination: { el: ".swiper-pagination", clickable: !0 },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    breakpoints: { 320: { slidesPerView: 2, spaceBetween: 10 }, 575: { slidesPerView: 2, spaceBetween: 10 }, 768: { slidesPerView: 2 }, 991: { slidesPerView: 3 }, 1200: { slidesPerView: 4 } },
})),
    (swiper = new Swiper("#IllusStorSlider", {
        slidesPerView: 4,
        spaceBetween: 50,
        slidesPerGroup: 2,
        loop: !0,
        loopFillGroupWithBlank: !0,
        pagination: { el: ".swiper-pagination", clickable: !0 },
        navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    })),
    (swiper = new Swiper(".mobileNewsSlider", { autoplay: { delay: 5e3 }, direction: "vertical", loop: !0, slidesPerView: 1, pagination: { el: ".swiper-pagination", clickable: !0 } }));