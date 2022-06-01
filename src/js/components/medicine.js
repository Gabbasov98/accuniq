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