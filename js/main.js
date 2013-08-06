$(document).ready(function() {
    $("#feed-btn").click(function() {
        $("#directions").fadeOut();
         $("#feed").fadeIn();
    });
    $("#dir-btn").click(function() {
        $("#feed").fadeOut();
        $("#directions").fadeIn();
    });

    $("#feed-btn").click(function() {
        $("#directions").hide();
        $("#feed").fadeIn();
    });

    $(".nav-tabs > li").click(function() {

        if(!$(this).hasClass("active")){
            var newId = "#" + $(this).attr("id") + "-content";
            $(".nav-tabs > li").removeClass("active");
            $(this).addClass("active");
            $(".tabcontent > div").hide();
            $(newId).fadeIn();
        }
    });
});