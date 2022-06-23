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
let medicineModalId = 1

$(document).ready(function() {

    $(".medicine-card__marker").click(function() {
        let id = $(this).parents(".medicine-card__info").attr("data-step")
        medicineModalId = +id
        console.log(id);
        $(".medicine-card__info").removeClass("medicine-card__info--active")
        $(this).parents(".medicine-card__info").addClass("medicine-card__info--active")
    })

    $(document).mouseup(function(e) {
        var div = $('.medicine-card__info--active');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            $(div).removeClass("medicine-card__info--active")
        }
    });

    loopMedicine()
})

function loopMedicine() {
    let medModalNum = +$(".medicine-card__info").length

    setInterval(() => {
        if (medicineModalId === medModalNum) {
            medicineModalId = 1
        } else {
            medicineModalId++
            $(".medicine-card__info").removeClass("medicine-card__info--active")
            $(`.medicine-card__info[data-step="${medicineModalId}"]`).addClass("medicine-card__info--active")
        }
    }, 4000);
}
function blogSlider() {
    var swiper = new Swiper('.blog-collection .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: true,
        speed: 2000,
        loop: true,
        navigation: {
            nextEl: '.blog-collection .swiper-button-next',
            prevEl: '.blog-collection .swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
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

$(document).ready(function() {

    blogSlider()

    $(".qa-card__show").click(function() {
        $(this).parents(".qa-card").toggleClass("qa-card--active")
        $(this).siblings(".qa-card__hidden").slideToggle()
    })

})
let productSlidersArray = []


function gallery() {
    $(".product-card__gallery").each(function(index, el) {
        $(el).attr("data-slider-id", `${index}`)
        productSlidersArray[index] = new Swiper(`.product-card__gallery[data-slider-id="${index}"] .mySwiper`, {
            spaceBetween: 10,
            slidesPerView: 3,
            freeMode: true,
            watchSlidesProgress: true,
        })
        var swiper2 = new Swiper(`.product-card__gallery[data-slider-id="${index}"] .mySwiper2`, {
            spaceBetween: 10,
            thumbs: {
                swiper: productSlidersArray[index],
            },
        });
    })


}

$(document).ready(function() {
    $('input[type="tel"]').mask('+7 999 9999999', { autoclear: false }, { placeholder: '+7            ' });
    gallery()


    $(".header__burger").click(function() {
        $(this).toggleClass("header__burger--active")
        $(".header__mob").toggleClass("header__mob--active")
        $("body").toggleClass("fixed-body")
    })


    $(".tab").click(function() {
        let parent = $(this).parents(".tab-parent")
        let path = $(this).attr("data-tabs-path")
        $(parent).find(".tab").removeClass("tab--active")
        $(this).addClass("tab--active")
        $(parent).find(".tab-content").removeClass("tab-content--active")
        $(parent).find(`.tab-content[data-tabs-path="${path}"]`).addClass("tab-content--active")
    })

    $(".nav__item").hover(onIn, onOut);
    $(".nav__item-show").click(function() {
        if ((window.innerWidth < 992)) {
            $(this).parents(".nav__item").toggleClass("nav__item--active")
            $(this).siblings(".nav__item-hidden").slideToggle()
        }
    })

    function onIn() {
        if (window.innerWidth > 1279) {
            let el = $(this)
            setTimeout(function() {
                if (el.is(':hover')) {
                    console.log(el)
                    el.addClass("nav__item--active")
                }
            }, 200);
        }
    }

    function onOut() {
        if (window.innerWidth > 1279) {
            $(this).removeClass("nav__item--active")
        }
    }


    $('.video').parent().click(function() {
        if ($(this).children(".video").get(0).paused) {
            $(this).children(".video").get(0).play();
            $(this).children(".playpause").removeClass("video__btn--pause")
        } else {
            $(this).children(".video").get(0).pause();
            $(this).children(".playpause").addClass("video__btn--pause")
        }
    });



    if (document.querySelector('#indexVideo2')) {
        var video = document.querySelector('#indexVideo2');
        var promise = video.play();

        if (promise !== undefined) {
            promise.then(_ => {
                // Autoplay started!
            }).catch(error => {
                // Autoplay not allowed!
                // Mute video and try to play again
                video.muted = true;
                video.play();

                // Show something in the UI that the video is muted
            });
        }
    }






    // $(".video").get(0).play();
    if (document.querySelector('#indexVideo')) {
        var video = document.querySelector('#indexVideo');
        var promise = video.play();

        if (promise !== undefined) {
            promise.then(_ => {
                // Autoplay started!
            }).catch(error => {
                // Autoplay not allowed!
                // Mute video and try to play again
                video.muted = true;
                video.play();

                // Show something in the UI that the video is muted
            });
        }
    }


    $(".subheader__link").click(function(event) {
        event.preventDefault();
        var idc = $(this).attr('href'),
            top = $(idc).offset().top;
        $('body,html').animate({ scrollTop: top - 155 }, 0);
    });


    $(window).scroll(function() {
        var $sections = $('.anchor');
        $sections.each(function(i, el) {
            var top = $(el).offset().top - 175;

            var bottom = top + $(el).height();
            var scroll = $(window).scrollTop();
            var idn = $(el).attr('id');
            if (scroll > top && scroll < bottom) {
                $('.subheader__link').removeClass('subheader__link--active');
                $('.subheader__link[href="#' + idn + '"]').addClass('subheader__link--active');
            }
        });
    });

});
//# sourceMappingURL=../sourcemaps/main.js.map
