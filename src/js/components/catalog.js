let catalogSlidersArray = []


function catalogSlider() {
    $(".catalog-group__slider").each(function(index, el) {
        $(el).attr("data-slider-id", `${index}`)
        catalogSlidersArray[index] = new Swiper(`.catalog-group__slider[data-slider-id="${index}"] .swiper-container`, {
            slidesPerView: 1,
            spaceBetween: 0,
            effect: "fade",
            navigation: {
                nextEl: `.catalog-group__slider[data-slider-id="${index}"] .swiper-button-next`,
                prevEl: `.catalog-group__slider[data-slider-id="${index}"] .swiper-button-prev`,
            },
        })
    })
}

function equipmentSlider() {
    var swiper = new Swiper('.equipment .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
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
}


$(document).ready(function() {
    catalogSlider()
    equipmentSlider()
})