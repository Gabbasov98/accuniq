$(document).ready(function() {

    $(".medicine-card__marker").click(function() {
        $(".medicine-card__info").removeClass("medicine-card__info--active")
        $(this).parents(".medicine-card__info").addClass("medicine-card__info--active")
    })

    $(document).mouseup(function(e) {
        var div = $('.medicine-card__info--active');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            $(div).removeClass("medicine-card__info--active")
        }
    });

})