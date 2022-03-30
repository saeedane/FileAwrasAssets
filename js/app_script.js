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
		$(this).parent('.mobile_newsConten').addClass('d-none');

	     localStorage.setItem('close_news', true);

        });

	
});
	  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
	if (localStorage.getItem('close_news') === 'true') {
	$("#breaking-news-mobile").addClass('d-none');
	
}else{
	$("#breaking-news-mobile").addClass('d-block');
	
}

setTimeout(function() {
  $(".loding").addClass('d-none');

  }, 5000);

  });
	$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 5) {
        $(".header_area").addClass("sticky");
    } else {
        $(".header_area").removeClass("sticky");
    }
});
    $(function () {
        $("#audioPlayer").audioPlayer();
  $('.fotorama').fotorama({

    allowfullscreen:true,					
    nav: "thumbs",
    ratio:"800/600",
    thumbwidth:"87",
    thumbheight:"87",
    auto:false,

  });});


    var swiper = new Swiper("#newsTopSlider", {
       autoplay: {
        delay: 5000,
       },
     navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
     },
     });
   
   
     var swiper = new Swiper("#mostReadeSlider", {
     	 autoplay: {
         delay: 5000,
      },
       slidesPerView: 4,
       spaceBetween: 50,
       slidesPerGroup: 2,
       loop: false,
       loopFillGroupWithBlank: true,
       pagination: {
         el: ".swiper-pagination",
         clickable: true,
       },
       navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
       },
   
       breakpoints: {
         320: {
           slidesPerView: 2,
           spaceBetween: 10,
         },
         575: {
           slidesPerView: 2,
           spaceBetween: 10,
         },
         768: {
           slidesPerView: 2,
         },
         991: {
           slidesPerView: 3,
         },
         1200: {
           slidesPerView: 4,
         }
       }
   
     });
   
     var swiper = new Swiper("#IllusStorSlider", {
     // 	 autoplay: {
      //   delay: 5000,
      // },
       slidesPerView: 4,
       spaceBetween: 50,
       slidesPerGroup: 2,
       loop: true,
       loopFillGroupWithBlank: true,
       pagination: {
         el: ".swiper-pagination",
         clickable: true,
       },
       navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
       },
     });
   
     var swiper = new Swiper(".mobileNewsSlider", {
        autoplay: {
          delay: 5000,
        },
       direction: "vertical",
       loop: true,
       slidesPerView: 1,
       pagination: {
         el: ".swiper-pagination",
         clickable: true,
       },
     });
     // image defualt 
   	window.onload = function() {
      imgs = document.querySelectorAll('img');
    for (i = 0; i < imgs.length; i++) {
      if (imgs[i].getAttribute('data-src')) {
        imgs[i].setAttribute('src', imgs[i].getAttribute('data-src'));
      }
    }
    }