var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var img = new Image();
var w;
var h;
var offset;
var glitchInterval;

//canvas.position(w / 2, h / 2);

img.src = "images/LesGlitchers(white).png";
img.onload = function() {
    init();
    window.onresize = init;
};

var init = function() {
    clearInterval(glitchInterval);
    canvas.width = w = window.innerWidth / 1.02;
    offset = w * .01;
    canvas.height = h = window.innerHeight / 2.5 ;
    glitchInterval = setInterval(function() {
        clear();
        context.drawImage(img, 0, 110, img.width, 155, offset, 100, w - (offset * 2), h);
        setTimeout(glitchImg, randInt(250, 1000)); }, 500);
    };

var clear = function() {
    context.rect(0, 0, w, h);
    context.fill();
};

var glitchImg = function() {
    for (var i = 0; i < randInt(1, 13); i++) {
        var x = Math.random() * w;
        var y = Math.random() * h;
        var spliceWidth = w - x;
        var spliceHeight = randInt(5, h / 3);
        context.drawImage(canvas, 0, y , spliceWidth, spliceHeight, x, y, spliceWidth, spliceHeight);
        context.drawImage(canvas, spliceWidth, y, x, spliceHeight, 0, y, x, spliceHeight);
    }
};

var randInt = function(a, b) {
    return ~~(Math.random() * (b -a) + a);
};
