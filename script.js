$(".answer").hide()

$(".Question").on("click", function() {
    $(this).find("svg").addClass("rotate")

    var ans = $(this).next(".answer")

    if (ans.is(":visible")) {
        $(this).find("svg").removeClass("rotate")  
        ans.slideUp()
    } else {
        ans.slideDown()
    }
})


