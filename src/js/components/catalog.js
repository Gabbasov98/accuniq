let catalogSlidersArray = []


function catalogSlider() {
    $(".catalog-group__slider").each(function(index, el) {
        $(el).attr("data-slider-id", `${index}`)
        catalogSlidersArray[index] = new Swiper(`.catalog-group__slider[data-slider-id="${index}"] .swiper-container`, {
            slidesPerView: 1,
            spaceBetween: 0,
            effect: "fade",
            speed: 2000,
            autoplay: {
                delay: 4000,
            },
            loop: true,
            navigation: {
                nextEl: `.catalog-group__slider[data-slider-id="${index}"] .swiper-button-next`,
                prevEl: `.catalog-group__slider[data-slider-id="${index}"] .swiper-button-prev`,
            },
        })
        catalogSlidersArray[index].on('slideNextTransitionStart', function() {
            $(`.catalog-group__slider[data-slider-id="${index}"] .swiper-button-next`).addClass("swiper-button-active")
            setTimeout(() => {
                $(`.catalog-group__slider[data-slider-id="${index}"] .swiper-button-next`).removeClass("swiper-button-active")
            }, 500);
        });
    })
}

function equipmentSlider() {
    var swiper = new Swiper('.equipment .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 2000,
        autoplay: {
            delay: 4000,
        },
        loop: true,
        navigation: {
            nextEl: '.equipment .swiper-button-next',
            prevEl: '.equipment .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
            1600: {
                slidesPerView: 4,
            },
        }
    })
    swiper.on('slideNextTransitionStart', function() {
        $(".equipment .swiper-button-next").addClass("swiper-button-active")
        setTimeout(() => {
            $(".equipment .swiper-button-next").removeClass("swiper-button-active")
        }, 500);
    });
}


$(document).ready(function() {
    catalogSlider()
    equipmentSlider()
})