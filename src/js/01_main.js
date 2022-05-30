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
            $(this).children(".playpause").fadeOut();
        } else {
            $(this).children(".video").get(0).pause();
            $(this).children(".playpause").fadeIn();
        }
    });
});