var min = 1;
var max = 6;
var turns = 3;

var positions = [
  [ // One
    { x:  180, y: 1620 },
    { x:  540, y: 1260 },
    { x:  900, y:  900 },
    { x: 1260, y:  540 },
    { x: 1620, y:  180 },
    { x: 1980, y: 1980 }
  ],
  [ // Two
    { x:    0, y: 1980 },
    { x:  360, y: 1620 },
    { x:  720, y: 1260 },
    { x: 1080, y:  900 },
    { x: 1440, y:  540 },
    { x: 1800, y:  180 }
  ],
  [ // Three
    { x:  180, y:  450 },
    { x:  540, y:  810 },
    { x:  900, y: 1170 },
    { x: 1260, y: 1530 },
    { x: 1620, y: 1890 },
    { x: 1980, y:   90 }
  ],
  [ // Four
    { x:    0, y:   90 },
    { x:  360, y:  450 },
    { x:  720, y:  810 },
    { x: 1080, y: 1170 },
    { x: 1440, y: 1530 },
    { x: 1800, y: 1890 }
  ],
  [ // Five
    { x:  270, y: 1710 },
    { x:  630, y: 1350 },
    { x:  990, y:  990 },
    { x: 1350, y:  630 },
    { x:  270, y: 1710 },
    { x: 2070, y:    0 }
  ],
  [ // Six
    { x:   90, y:  270 },
    { x:  450, y:  630 },
    { x:  810, y:  990 },
    { x: 1170, y: 1350 },
    { x: 1530, y: 1710 },
    { x: 1890, y: 2070 }
  ]
];

var currentPositions = [
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 }
];

$('.cube').click(function(){
  if ($(this).hasClass('held')) {
    $(this).removeClass('held');
  } else {
    $(this).addClass('held');
  }
});

$('#roll').click(function(){
  var cubes = $('.cube:not(.held)');
  cubes.each(function(){
    roll($(this));
  });
  turns--;

  $('#turns').text(turns);


});

function roll(dice) {
  var rand = getRandom(max, min);
  var spins = getRandom(max, min);

  // console.log("Number: " + rand);
  // console.log("Spins: " + spins);

  rand--;
  spins--;

  // console.log(positions[rand]);

  // console.log(positions[rand][spins].x+', '+positions[rand][spins].y);

  var xPos = positions[rand][spins].x + 1800;
  var yPos = positions[rand][spins].y + 1800;

  dice.css('transform', 'rotateX('+xPos+'deg) rotateY('+yPos+'deg)');
  dice.css('-webkit-transform', 'rotateX('+xPos+'deg) rotateY('+yPos+'deg)');
}

function getRandom(max, min) {
  return Math.floor(Math.random() * (max-min)) + min;
}

function hideP() {
  var x = document.getElementById("myP");
  if (x.style.display === "none") {
    x.style.display = "none";
  } else {
    x.style.display = "none";
  }

  document.getElementById("replace").style.color = "#F3EDE2";
}
