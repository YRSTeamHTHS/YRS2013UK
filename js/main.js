$(document).ready(function() {
    $("#feed-btn").click(function() {
        $("#directions").fadeOut();
         $("#feed").fadeIn();
    });
    $("#dir-btn").click(function() {
        $("#feed").fadeOut();
        $("#directions").fadeIn();
    });
});