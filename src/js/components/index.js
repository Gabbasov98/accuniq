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
        speed: 2000,
        autoplay: {
            delay: 4000,
        },
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
    swiper.on('slideNextTransitionStart', function() {
        $(".decision-collection .swiper-button-next").addClass("swiper-button-active")
        setTimeout(() => {
            $(".decision-collection .swiper-button-next").removeClass("swiper-button-active")
        }, 500);
    });
}

function compatibilitySlider() {
    var swiper = new Swiper('.compatibility .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 50,
        speed: 2000,
        autoplay: {
            delay: 4000,
        },
        loop: true,
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
        },
    })
    swiper.on('slideNextTransitionStart', function() {
        $(".compatibility .swiper-button-next").addClass("swiper-button-active")
        setTimeout(() => {
            $(".compatibility .swiper-button-next").removeClass("swiper-button-active")
        }, 500);
    });
}


$(document).ready(function() {
    decisionSlider()
    compatibilitySlider()

    if (window.innerWidth < 1400) {
        trustSlider()
    }


    $(window).resize(function() {
        if (window.innerWidth < 1400) {
            trustSlider()
        }


    })

})


$(window).scroll(function() {
    changeLearnColor()
    changeProgrammColor()
    showSearch()
    showSearch2()
});



function showSearch() {
    el = $(".effectivity__by-doc")
    if (el.length !== 0) {
        var wt = $(window).scrollTop();
        var wh = $(window).height();
        var et = $(el).offset().top;
        var eh = $(el).outerHeight();
        var dh = $(document).height();
        if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
            $(el).addClass("effectivity__by-doc--active")
        }
    }

}

function showSearch2() {
    el = $(".certificate__link-icon")
    if (el.length !== 0) {
        var wt = $(window).scrollTop();
        var wh = $(window).height();
        var et = $(el).offset().top;
        var eh = $(el).outerHeight();
        var dh = $(document).height();
        if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
            $(el).addClass("certificate__link-icon--active")
        }
    }
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
    $(".programm__items").each(function(index, el) {

        var wt = $(window).scrollTop();
        var wh = $(window).height();
        var et = $(el).offset().top;
        var eh = $(el).outerHeight();
        var dh = $(document).height();
        if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
            showProgramms()
        }

    });
}

function showProgramms() {
    let programmNum = $(".programm__item").length
    let num = 1
    let programmInterval = setInterval(() => {
        if (num === programmNum) {
            clearInterval(programmInterval);
        }
        $(`.programm__item:nth-child(${num})`).addClass("programm__item--active")
        num++
    }, 400);

}