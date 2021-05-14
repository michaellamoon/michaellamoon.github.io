var coordsA = [];
        coordsA[0] = "115,142,313,328";
        coordsA[1] = "329,197,529,279";
        coordsA[2] = "544,133,744,334";
        coordsA[3] = "300,514,419,692";
        coordsA[4] = "455,566,645,646";

        coordsA[5] = "674,530,943,678";
        coordsA[6] = "758,797,898,1154";
        coordsA[7] = "1141,894,1247,1078";
        coordsA[8] = "1312,945,1516,1030";
        coordsA[9] = "1549,950,1765,1017";
        coordsA[10] = "1511,1269,1709,1451";

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
