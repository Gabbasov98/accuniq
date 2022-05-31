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
        autoplay: true,
        speed: 2000,
        loop: true,
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

function effectivitySlider() {
    var swiper = new Swiper('.effectivity__slider .swiper-container', {
        slidesPerView: "auto",
        spaceBetween: 0,
    })
}

$(document).ready(function() {
    decisionSlider()
    compatibilitySlider()

    if (window.innerWidth < 1400) {
        trustSlider()
    }

    if (window.innerWidth < 992) {
        effectivitySlider()
    }

    $(window).resize(function() {
        if (window.innerWidth < 1400) {
            trustSlider()
        }

        if (window.innerWidth < 992) {
            effectivitySlider()
        }
    })

})


$(window).scroll(function() {
    changeAdvantageColor()
    changeLearnColor()
    changeProgrammColor()
});


function changeAdvantageColor() {
    $(".advantages__item-icon").each(function(index, el) {

        var wt = $(window).scrollTop();
        var wh = $(window).height();
        var et = $(el).offset().top;
        var eh = $(el).outerHeight();
        var dh = $(document).height();
        if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
            $(el).addClass("advantages__item-icon--active")
        }

    });
}

function changeLearnColor() {
    $(".what-learn__item").each(function(index, el) {

        var wt = $(window).scrollTop();
        var wh = $(window).height();
        var et = $(el).offset().top;
        var eh = $(el).outerHeight();
        var dh = $(document).height();
        if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
            $(el).addClass("what-learn__item--active")
        }

    });
}

function changeProgrammColor() {
    $(".programm__item").each(function(index, el) {

        var wt = $(window).scrollTop();
        var wh = $(window).height();
        var et = $(el).offset().top;
        var eh = $(el).outerHeight();
        var dh = $(document).height();
        if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
            $(el).addClass("programm__item--active")
        }

    });
}