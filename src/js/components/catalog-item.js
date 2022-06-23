function catalogGallery() {
    var swiper = new Swiper(".catalog-gallery .mySwiper", {
        spaceBetween: 10,
        slidesPerView: 7,
        freeMode: true,
        watchSlidesProgress: true,
        direction: "vertical",
        speed: 2000,
        autoplay: {
            delay: 4000,
        },
        // loop: true,
        mousewheel: {
            releaseOnEdges: true,
        },
        speed: 1000,
        scrollbar: {
            el: '.catalog-gallery .swiper-scrollbar',
            draggable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: "auto",
                direction: "horizontal",
            },
            768: {
                direction: "vertical",
                slidesPerView: 5,
            },
            992: {
                slidesPerView: 5,
            },
            1400: {
                slidesPerView: 7,
            },
        }
    });
    var swiper2 = new Swiper(".catalog-gallery .mySwiper2", {
        spaceBetween: 10,
        direction: "vertical",
        speed: 1000,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        navigation: {
            nextEl: " .swiper-button-next",
            prevEl: " .swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
        breakpoints: {
            320: {
                direction: "horizontal",
            },
            768: {
                direction: "vertical",
            },
        }
    });
}

function resultsSlider() {
    var swiper = new Swiper('.results .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 2000,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        navigation: {
            nextEl: '.results .swiper-button-next',
            prevEl: '.results .swiper-button-prev',
        },
        pagination: {
            el: '.results .swiper-pagination',
            type: 'fraction',
            clickable: true,
            formatFractionCurrent: addZero,
            formatFractionTotal: addZero
        },


    })
    swiper.on('slideNextTransitionStart', function() {
        $(".results .swiper-button-next").addClass("swiper-button-active")
        setTimeout(() => {
            $(".results .swiper-button-next").removeClass("swiper-button-active")
        }, 500);
    });

    function addZero(num) {
        return (num > 9) ? num : '0' + num;
    }
}

$(document).ready(function() {
    catalogGallery()
    resultsSlider()

    $("[data-video-src]").click(function() {
        let videoSrc = $(this).attr("data-video-src")
        console.log($("#myVideo source"))

        $("#myVideo source").attr("src", videoSrc)
    })
})