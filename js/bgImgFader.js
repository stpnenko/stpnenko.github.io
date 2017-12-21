$(document).ready(function () {
        
    var images = ["img/bg4.jpg",
                  "img/bg5.jpg",
                  "img/bg6.jpg"];
        
    var duration = 5000;
    var image = $("#fader");
        
    $(function () {
        var i = 0;
        image.css("background-image", "url(" + images[i] + ")");
        setInterval(function () {
            i++;
            if (i == images.length) i = 0;
            image.parent().css("background-image", "url(" + images[i] + ")");
            image.fadeOut(1500, function () {
                $(this).css("background-image", "url(" + images[i] + ")");
                $(this).fadeIn(1500);
            });
        }, duration);
    });
});