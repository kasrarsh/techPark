
$(document).ready(function(){
    $("#innovation-center .rectangle").click(function () {

        var oldInnovationId =  $("#innovation-center .icons").find(".active").attr("innovationId");
        $("#innovation-center .icons").find(".active").removeClass("active");
        $("#innovation-center .text").find(".innovation-center-" + oldInnovationId).removeClass("d-block").addClass("d-none");
        $("#innovation-center .image").find(".innovation-center-" + oldInnovationId).removeClass("d-block").addClass("d-none");

        $(this).addClass("active");
        var newInnovationId = $(this).attr("innovationId");
        $("#innovation-center .text").find(".innovation-center-" + newInnovationId).removeClass("d-none").addClass("d-block");
        $("#innovation-center .image").find(".innovation-center-" + newInnovationId).removeClass("d-none").addClass("d-block");
    });
    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        slidesPerView: 1,
        spaceBetween: 30,
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            // when window width is >= 480px
            // when window width is >= 640px
            800: {
                slidesPerView: 3,
            }
        },
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })



});