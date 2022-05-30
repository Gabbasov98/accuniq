function trustSlider() {
    var swiper = new Swiper('.trust .swiper-container', {
        slidesPerView: "auto",
        spaceBetween: 30,
    })
}

function decisionSlider() {
    var swiper = new Swiper('.decision-collection .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.decision-collection .swiper-button-next',
            prevEl: '.decision-collection .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            350: {
                slidesPerView: "auto",
                spaceBetween: 20,
            },
            1500: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }
    })
}

function compatibilitySlider() {
    var swiper = new Swiper('.compatibility .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 50,
        navigation: {
            nextEl: '.compatibility .swiper-button-next',
            prevEl: '.compatibility .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            1400: {
                slidesPerView: 2,
            },
        }
    })
}

$(document).ready(function() {
    decisionSlider()
    compatibilitySlider()

    if (window.innerWidth < 1400) {
        trustSlider()
    }

    $(window).resize(function() {
        trustSlider()
    })

})