var $win = $(window),
    w = 0,
    h = 0,
    rgb = [],

    getWidth = function () {
        w = $win.width();
        h = $win.height();
    };

var timeout = null;

$win.ready(getWidth).mousemove(function (e) {

    rgb = [
    Math.round(e.pageX / w * 200),
    Math.round(e.pageY / h * 200),
    0];

    if (timeout !== null) {
        $('.txt').css('color', 'rgb(' + rgb.join(',') + ')');
        clearTimeout(timeout);
    }

    timeout = setTimeout(function () {
        $('.circle').animate({backgroundColor: "#221f1f"}, "fast");
    }, 1000);

}).ready();


var arrow = $('#arrow');
var arrowX = arrow.offset().left + arrow.outerWidth(true) / 2;
var arrowY = arrow.offset().top + arrow.outerHeight(true) / 2;

$(document).on('mousemove', function(event) {
  var rad = Math.atan2(event.pageY - arrowY, event.pageX - arrowX);
  arrow.css('transform', 'skewY('+rad+ 'rad)');
});
