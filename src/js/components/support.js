function blogSlider() {
    var swiper = new Swiper('.blog-collection .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
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