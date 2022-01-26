var coordsA = [];
        coordsA[0] = "123,24,17,129";
        coordsA[1] = "32,269,109,188";
        coordsA[2] = "36,314,101,378";
        coordsA[3] = "44,423,91,487";

        coordsA[4] = "288,269,364,190";
        coordsA[5] = "534,196,605,265";

        coordsA[6] = "788,75,879,176";
        coordsA[7] = "790,299,880,386";


function setcoords(areaid, totalOfAreas) {
    document.getElementById('paredea').style.width = "auto";
    var width1 = document.getElementById('paredea').width;
    document.getElementById('paredea').style.width = "45%";
    var width2 = document.getElementById('paredea').width;
    var ratio = width2 / width1;

    for (var i = 0; i < totalOfAreas; i++) {
        var temp = coordsA[i].split(",");
        var newcoords = "";
        for (var j = 0; j < temp.length; j++) {
            temp[j] *= ratio;
            newcoords += temp[j] + ",";
        }
        newcoords = newcoords.substr(0, newcoords.length - 1);

        document.getElementById(areaid + i).coords = newcoords;
        }
    };
window.onload = function () {
    setcoords("paredea", 11);
};
window.onresize = function () {
    setcoords("paredea", 11);
};

$(document).ready(function() {
        // Tooltip only Text
        $('.masterTooltip').hover(function(){
                // Hover over code
                var title = $(this).attr('title');
                $(this).data('tipText', title).removeAttr('title');
                $('<p class="tooltip"></p>')
                .text(title)
                .appendTo('body')
                .fadeIn('slow');
        }, function() {
                // Hover out code
                $(this).attr('title', $(this).data('tipText'));
                $('.tooltip').remove();
        }).mousemove(function(e) {
                var mousex = e.pageX + 20; //Get X coordinates
                var mousey = e.pageY - 5; //Get Y coordinates
                $('.tooltip')
                .css({ top: mousey, left: mousex })
        });
});
$(function() {
        $('.map').maphilight({
            fillColor: '262262'
        });
    });
