$(document).ready(function () {
    $(".col-carousel").on("mouseenter", function () {
        $(this).css("flex", "2");
        $(this).siblings().css("flex", "1");
    });

    $(".col-carousel").on("mouseleave", function () {
        $(this).css("flex", "1");
        $(this).siblings().css("flex", "1");
    });
});
