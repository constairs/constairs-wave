$(document).ready(function() {
    $("#portfolio_grid").mixItUp();
    $(".s_portfolio li").click(function() {
        $(".s_portfolio li").removeClass("active");
        $(this).addClass("active");
    });
    $(".person .popup").magnificPopup({
        type: "image"
    });
    $(".popup_content").magnificPopup({
        type: "inline",
        midClick: true
    });
    $(".top_text h1").animated("fadeInDown", "fadeOutUp");
    $(".top_text p, .section_header").animated("fadeInUp", "fadeOutDown");
    $(".animation_1").animated("flipInY", "flipOutY")
    $(".animation_2").animated("fadeInLeft", "fadeOutLeft");
    $(".animation_3").animated("fadeInRight", "fadeOutRight")
    $(".left .resume_item").animated("fadeInLeft", "fadeOutLeft");
    $(".right .resume_item").animated("fadeInRight", "fadeOutRight");
    $(".toggle_mnu, .menu_item").click(function() {
        $(".sandwich").toggleClass("active");
    });
    $(".top_mnu li a").click(function() {
        $(".top_mnu").fadeOut(600);
        $(".top_text").css("opacity", "1");
        $(".sandwich").toggleClass("active");
    });
    $(".toggle_mnu").click(function() {
        if ($(".top_mnu").is(":visible")) {
            $(".top_text").css("opacity", "1");
            $(".top_mnu").fadeOut(600);
            $(".top_mnu li a").removeClass("fadeInUp animated");
        } else {
            $(".top_text").css("opacity", ".1");
            $(".top_mnu").fadeIn(600);
            $(".top_mnu li a").addClass("fadeInUp animated");
        };
    });
    $(".portfolio_item").each(function(i) {
        $(this).find("a").attr("href", "#work_" + i);
        $(this).find(".port_description").attr("id", "work_" + i);
    });
    $(function() {
        $("input,select,textarea").not("[type=submit]").jqBootstrapValidation();
    });
    $(".top_mnu ul a[href*='#']").mPageScroll2id();
});