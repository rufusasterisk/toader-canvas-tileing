var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var image = document.getElementById('source');
var toadImage = document.getElementById('toadSource');

var sourceX = 53;
var sourceY = 480;
var sourceWidth = 54;
var sourceHeight = 52;

var destinationX = 0;
var destinationY = 575;
var destinationWidth = sourceWidth;
var destinationHeight = sourceHeight;

var RedZero = {
  sourceX: 1977,
  sourceY: 532,
  sourceWidth: 24,
  sourceHeight: 25,
}

var RedOne = {
  sourceX: 2031,
  sourceY: 532,
  sourceWidth: 24,
  sourceHeight: 25,
}

var RedTwo = {
  sourceX: 2083,
  sourceY: 532,
  sourceWidth: 24,
  sourceHeight: 25,
}

var RedThree = {
  sourceX: 2137,
  sourceY: 532,
  sourceWidth: 24,
  sourceHeight: 25,
}

var RedFour = {
  sourceX: 2189,
  sourceY: 532,
  sourceWidth: 24,
  sourceHeight: 25,
}

var RedFive = {
  sourceX: 2243,
  sourceY: 532,
  sourceWidth: 24,
  sourceHeight: 25,
}

var RedSix = {
  sourceX: 2297,
  sourceY: 532,
  sourceWidth: 24,
  sourceHeight: 25,
}

var RedSeven = {
  sourceX: 2350,
  sourceY: 532,
  sourceWidth: 24,
  sourceHeight: 25,
}

var RedEight = {
  sourceX: 2403,
  sourceY: 532,
  sourceWidth: 24,
  sourceHeight: 25,
}

var RedNine = {
  sourceX: 2457,
  sourceY: 532,
  sourceWidth: 24,
  sourceHeight: 25,
}

function drawScore(image, score, destinationX, destinationY) {
  let scoreArray = score.toString().split("");
  while (scoreArray.length < 5) {
    scoreArray.unshift('0');
  }
  scoreArray.forEach(function(number, i) {
    let myObject = {};
    switch (number) {
      case '0':
        myObject = RedZero;
        break;
      case '1':
        myObject = RedOne;
        break;
      case '2':
        myObject = RedTwo;
        break;
      case '3':
        myObject = RedThree;
        break;
      case '4':
        myObject = RedFour;
        break;
      case '5':
        myObject = RedFive;
        break;
      case '6':
        myObject = RedSix;
        break;
      case '7':
        myObject = RedSeven;
        break;
      case '8':
        myObject = RedEight;
        break;
      case '9':
        myObject = RedNine;
        break;
    }
    context.drawImage(image, myObject.sourceX, myObject.sourceY, myObject.sourceWidth, myObject.sourceHeight, destinationX + 25 * i, destinationY, myObject.sourceWidth, myObject.sourceHeight)
  })
}

  function drawText(myText){
    context.font = "36px Georgia";
    context.fillStyle = 'black';
    context.fillText(myText, 10, 720);
  }

// context.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, destinationX, destinationY, destinationWidth, destinationHeight)
// console.log('hello javascript');

// context.drawImage(image, 140, 60, 40, 43, 25, 75, 40, 43)
window.onload = function() {
  for (var i = 0; i < 19; i++) {
    context.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, destinationX + 54 * i, destinationY, destinationWidth, destinationHeight)
  }
  context.fillStyle = 'black';
  context.fillRect(0, 375, 1000, 200);

  context.fillStyle = '#000047';
  context.fillRect(0, 75, canvas.width, 250);

  for (i = 0; i < 5; i++) {
    context.fillStyle = '#000047';
    context.fillRect(36.5 + (215 * i), 25, 67, 50)
  }

  destinationY = 325;

  for (var i = 0; i < 19; i++) {
    context.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, destinationX + 54 * i, destinationY, destinationWidth, destinationHeight)
  }

  var BottomRight = {
    sourceX: 1440,
    sourceY: 800,
    sourceWidth: 23,
    sourceHeight: 23,
  }

  var BottomLeft = {
    sourceX: 1337,
    sourceY: 800,
    sourceWidth: 23,
    sourceHeight: 23,
  }

  var Left = {
    sourceX: 1440,
    sourceY: 747,
    sourceWidth: 23,
    sourceHeight: 26,
  }

  var Right = {
    sourceX: 1337,
    sourceY: 747,
    sourceWidth: 23,
    sourceHeight: 26,
  }

  var TopRight = {
    sourceX: 1333,
    sourceY: 693,
    sourceWidth: 27,
    sourceHeight: 27,
  }

  var TopLeft = {
    sourceX: 1387,
    sourceY: 693,
    sourceWidth: 26,
    sourceHeight: 27,
  }

  var TopCenter = {
    sourceX: 1440,
    sourceY: 693,
    sourceWidth: 27,
    sourceHeight: 24,
  }

  var Center = {
    sourceX: 1388,
    sourceY: 747,
    sourceWidth: 25,
    sourceHeight: 26,
  }

  var WhiteOne = {
    sourceX: 2030,
    sourceY: 106,
    sourceWidth: 24,
    sourceHeight: 25,
  }

  var WhiteTwo = {
    sourceX: 2083,
    sourceY: 106,
    sourceWidth: 24,
    sourceHeight: 25,
  }

  var WhiteDash = {
    sourceX: 2297,
    sourceY: 266,
    sourceWidth: 24,
    sourceHeight: 25,
  }

  var WhiteU = {
    sourceX: 1976,
    sourceY: 266,
    sourceWidth: 25,
    sourceHeight: 26,
  }

  var WhiteP = {
    sourceX: 2242,
    sourceY: 212,
    sourceWidth: 25,
    sourceHeight: 26,
  }

  var WhiteH = {
    sourceX: 2349,
    sourceY: 158,
    sourceWidth: 25,
    sourceHeight: 26,
  }

  var WhiteI = {
    sourceX: 2405,
    sourceY: 158,
    sourceWidth: 25,
    sourceHeight: 26,
  }

  var WhiteS = {
    sourceX: 2403,
    sourceY: 212,
    sourceWidth: 25,
    sourceHeight: 26,
  }

  var WhiteC = {
    sourceX: 2083,
    sourceY: 158,
    sourceWidth: 25,
    sourceHeight: 26,
  }

  var WhiteO = {
    sourceX: 2189,
    sourceY: 212,
    sourceWidth: 25,
    sourceHeight: 26,
  }

  var WhiteR = {
    sourceX: 2349,
    sourceY: 212,
    sourceWidth: 25,
    sourceHeight: 26,
  }

  var WhiteE = {
    sourceX: 2192,
    sourceY: 158,
    sourceWidth: 25,
    sourceHeight: 26,
  }

  var YellowT = {
    sourceX: 1178,
    sourceY: 426,
    sourceWidth: 25,
    sourceHeight: 26,
  }

  var YellowI = {
    sourceX: 1125,
    sourceY: 372,
    sourceWidth: 25,
    sourceHeight: 26,
  }

  var YellowM = {
    sourceX: 803,
    sourceY: 426,
    sourceWidth: 25,
    sourceHeight: 26
  }

  var YellowE = {
    sourceX: 912,
    sourceY: 372,
    sourceWidth: 25,
    sourceHeight: 26,
  }

  var RedT = {
    sourceX: 1178,
    sourceY: 638,
    sourceWidth: 25,
    sourceHeight: 26,
  }

  var RedI = {
    sourceX: 1125,
    sourceY: 585,
    sourceWidth: 25,
    sourceHeight: 26,
  }

  var RedM = {
    sourceX: 803,
    sourceY: 638,
    sourceWidth: 25,
    sourceHeight: 26
  }

  var RedE = {
    sourceX: 912,
    sourceY: 585,
    sourceWidth: 25,
    sourceHeight: 26,
  }

  var ExtraToad = {
    sourceX: 750,
    sourceY: 57,
    sourceWidth: 23,
    sourceHeight: 23,
  }

  var OtherThing = {
    sourceX: 700,
    sourceY: 57,
    sourceWidth: 17,
    sourceHeight: 20,
  }

  let testObject = OtherThing;
  destinationX = 10;
  destinationY = 720;
  destinationWidth = testObject.sourceWidth;
  destinationHeight = testObject.sourceHeight;

  context.font = '36px "Press Start 2P"';
  // context.font = "Press Start 2P"
  context.fillStyle = 'black';
  context.fillText("TOADER", 10, 720);

  // context.drawImage(image, testObject.sourceX, testObject.sourceY, testObject.sourceWidth, testObject.sourceHeight, destinationX, destinationY, destinationWidth, destinationHeight)
  // context.drawImage(image, Center.sourceX, Center.sourceY, Center.sourceWidth, Center.sourceHeight, destinationX + 27, destinationY, destinationWidth, destinationHeight)

  function drawBlock(Block, startX, startY, counter) {
    for (i = 0; i < counter; i++) {
      context.drawImage(image, Block.sourceX, Block.sourceY, Block.sourceWidth, Block.sourceHeight, startX + (215 * i), startY, Block.sourceWidth, Block.sourceHeight)
    }
  }

  for (var i = 0; i < 41; i++) {
    context.drawImage(image, Center.sourceX, Center.sourceY, Center.sourceWidth, Center.sourceHeight, ((Center.sourceWidth * i)-9), -5, Center.sourceWidth, Center.sourceHeight)
  }

  drawBlock(BottomRight, 17, 55, 5);
  drawBlock(BottomLeft, 101, 55, 5);
  drawBlock(Left, 17, 29, 5);
  drawBlock(Right, 101, 29, 5);
  drawBlock(TopLeft, 17, 2, 5);
  drawBlock(TopCenter, 43, 2, 5); //left house roof
  drawBlock(TopCenter, 70, 2, 5); //right house roof
  drawBlock(TopCenter, -10, 54, 5);
  drawBlock(TopCenter, 178, 54, 5);
  drawBlock(TopCenter, 151, 54, 5);
  drawBlock(TopCenter, 124, 54, 5);
  drawBlock(Center, -8, 28, 5);
  drawBlock(Center, 182, 28, 4);
  drawBlock(Center, 157, 28, 4);
  drawBlock(Center, 132, 28, 5);
  drawBlock(Center, 120, 28, 5);
  drawBlock(Center, 122, 2, 5);
  drawBlock(Center, 145, 2, 5);
  drawBlock(Center, 170, 2, 5);
  drawBlock(Center, -20, 2, 5);
  drawBlock(Center, 5, 2, 5);
  drawBlock(TopRight, 97, 2, 5);

var Tractor = {
  sourceX: 138,
  sourceY: 1127,
  sourceWidth: 45,
  sourceHeight: 40,

  destinationX: 0,
  destinationY: 527,
  destinationWidth: 45,
  destinationHeight: 40,
}

context.drawImage(image, Tractor.sourceX, Tractor.sourceY, Tractor.sourceWidth, Tractor.sourceHeight, Tractor.destinationX, Tractor.destinationY, Tractor.destinationWidth, Tractor.destinationHeight);

var SlowCar = {
  sourceX: 350,
  sourceY: 1130,
  sourceWidth: 50,
  sourceHeight: 33,

  destinationX: 0,
  destinationY: 477,
  destinationWidth: 50,
  destinationHeight: 33,
}

context.drawImage(image, SlowCar.sourceX, SlowCar.sourceY, SlowCar.sourceWidth, SlowCar.sourceHeight, SlowCar.destinationX, SlowCar.destinationY, SlowCar.destinationWidth, SlowCar.destinationHeight);

var FastCar = {
  sourceX: 57,
  sourceY: 1123,
  sourceWidth: 50,
  sourceHeight: 47,

  destinationX: 0,
  destinationY: 427,
  destinationWidth: 50,
  destinationHeight: 47,
}

context.drawImage(image, FastCar.sourceX, FastCar.sourceY, FastCar.sourceWidth, FastCar.sourceHeight, FastCar.destinationX, FastCar.destinationY, FastCar.destinationWidth, FastCar.destinationHeight);

var Semi = {
  sourceX: 223,
  sourceY: 1130,
  sourceWidth: 90,
  sourceHeight: 33,

  destinationX: 0,
  destinationY: 377,
  destinationWidth: 90,
  destinationHeight: 33,
}

context.drawImage(image, Semi.sourceX, Semi.sourceY, Semi.sourceWidth, Semi.sourceHeight, Semi.destinationX, Semi.destinationY, Semi.destinationWidth, Semi.destinationHeight);

var TurtleSub = {
  sourceX: 1397,
  sourceY: 1824,
  sourceWidth: 33,
  sourceHeight: 33,

  destinationX: 0,
  destinationY: 277,
  destinationWidth: 33,
  destinationHeight: 33,
}
context.drawImage(image, TurtleSub.sourceX, TurtleSub.sourceY, TurtleSub.sourceWidth, TurtleSub.sourceHeight, TurtleSub.destinationX, TurtleSub.destinationY, TurtleSub.destinationWidth, TurtleSub.destinationHeight);

var TurtleSub3 = {
  sourceX: 1790,
  sourceY: 487,
  sourceWidth: 47,
  sourceHeight: 43,

  destinationX: 50,
  destinationY: 277,
  destinationWidth: 47,
  destinationHeight: 43,
}
context.drawImage(image, TurtleSub3.sourceX, TurtleSub3.sourceY, TurtleSub3.sourceWidth, TurtleSub3.sourceHeight, TurtleSub3.destinationX, TurtleSub3.destinationY, TurtleSub3.destinationWidth, TurtleSub3.destinationHeight);


var Turtle1 = {
  sourceX: 1443,
  sourceY: 493,
  sourceWidth: 44,
  sourceHeight: 30,

  destinationX: 0,
  destinationY: 127,
  destinationWidth: 44,
  destinationHeight: 30,
}

context.drawImage(image, Turtle1.sourceX, Turtle1.sourceY, Turtle1.sourceWidth, Turtle1.sourceHeight, Turtle1.destinationX, Turtle1.destinationY, Turtle1.destinationWidth, Turtle1.destinationHeight);

var Turtle2 = {
  sourceX: 1520,
  sourceY: 490,
  sourceWidth: 50,
  sourceHeight: 37,

  destinationX: 75,
  destinationY: 127,
  destinationWidth: 50,
  destinationHeight: 37,
}

context.drawImage(image, Turtle2.sourceX, Turtle2.sourceY, Turtle2.sourceWidth, Turtle2.sourceHeight, Turtle2.destinationX, Turtle2.destinationY, Turtle2.destinationWidth, Turtle2.destinationHeight);

var Turtle3 = {
  sourceX: 1600,
  sourceY: 490,
  sourceWidth: 50,
  sourceHeight: 37,

  destinationX: 150,
  destinationY: 127,
  destinationWidth: 50,
  destinationHeight: 37,
}

context.drawImage(image, Turtle3.sourceX, Turtle3.sourceY, Turtle3.sourceWidth, Turtle3.sourceHeight, Turtle3.destinationX, Turtle3.destinationY, Turtle3.destinationWidth, Turtle3.destinationHeight);


var Log = {
  sourceX: 1663,
  sourceY: 1023,
  sourceWidth: 140,
  sourceHeight: 34,

  destinationX: 0,
  destinationY: 227,
  destinationWidth: 140,
  destinationHeight: 34,
}

context.drawImage(image, Log.sourceX, Log.sourceY, Log.sourceWidth, Log.sourceHeight, Log.destinationX, Log.destinationY, Log.destinationWidth, Log.destinationHeight);

var LogLong = {
  sourceX: 1397,
  sourceY: 1717,
  sourceWidth: 300,
  sourceHeight: 33,

  destinationX: 0,
  destinationY: 177,
  destinationWidth: 300,
  destinationHeight: 33,
}

context.drawImage(image, LogLong.sourceX, LogLong.sourceY, LogLong.sourceWidth, LogLong.sourceHeight, LogLong.destinationX, LogLong.destinationY, LogLong.destinationWidth, LogLong.destinationHeight);

var LogOneHalf = {
  sourceX: 1557,
  sourceY: 1611,
  sourceWidth: 193,
  sourceHeight: 33,

  destinationX: 0,
  destinationY: 77,
  destinationWidth: 193,
  destinationHeight: 33,
}

context.drawImage(image, LogOneHalf.sourceX, LogOneHalf.sourceY, LogOneHalf.sourceWidth, LogOneHalf.sourceHeight, LogOneHalf.destinationX, LogOneHalf.destinationY, LogOneHalf.destinationWidth, LogOneHalf.destinationHeight);

function toadJumpUp(){
  setTimeout(drawToad(Toad1), 35);
  setTimeout(drawToad(Toad2), 35);
  setTimeout(drawToad(Toad3), 35);
  setTimeout(drawToad(Toad2), 35);
  setTimeout(drawToad(toad1), 35);
}

function drawToad(whichToad) {
  destinationX = 500;
  destinationY = 375;
  context.drawImage(toadImage, whichToad.sourceX, whichToad.sourceY, whichToad.sourceWidth, whichToad.sourceHeight, destinationX, destinationY, whichToad.destinationWidth, whichToad.destinationHeight);
}

var Toad1 = {
  sourceX: 62,
  sourceY: 62,
  sourceWidth: 38,
  sourceHeight: 38,

  destinationX: 250,
  destinationY: 575,
  destinationWidth: 37,
  destinationHeight: 38,
}

context.drawImage(toadImage, Toad1.sourceX, Toad1.sourceY, Toad1.sourceWidth, Toad1.sourceHeight, Toad1.destinationX, Toad1.destinationY, Toad1.destinationWidth, Toad1.destinationHeight);

var Toad2 = {
  sourceX: 145,
  sourceY: 62,
  sourceWidth: 30,
  sourceHeight: 35,

  destinationX: 300,
  destinationY: 575,
  destinationWidth: 30,
  destinationHeight: 35,
}

context.drawImage(toadImage, Toad2.sourceX, Toad2.sourceY, Toad2.sourceWidth, Toad2.sourceHeight, Toad2.destinationX, Toad2.destinationY, Toad2.destinationWidth, Toad2.destinationHeight);

var Toad3 = {
  sourceX: 221,
  sourceY: 62,
  sourceWidth: 37,
  sourceHeight: 30,

  destinationX: 350,
  destinationY: 575,
  destinationWidth: 37,
  destinationHeight: 30,
}

context.drawImage(toadImage, Toad3.sourceX, Toad3.sourceY, Toad3.sourceWidth, Toad3.sourceHeight, Toad3.destinationX, Toad3.destinationY, Toad3.destinationWidth, Toad3.destinationHeight);

var Toad1H = {
  sourceX: 302,
  sourceY: 62,
  sourceWidth: 37,
  sourceHeight: 37,

  destinationX: 400,
  destinationY: 575,
  destinationWidth: 37,
  destinationHeight: 37,
}

context.drawImage(toadImage, Toad1H.sourceX, Toad1H.sourceY, Toad1H.sourceWidth, Toad1H.sourceHeight, Toad1H.destinationX, Toad1H.destinationY, Toad1H.destinationWidth, Toad1H.destinationHeight);

var Toad2H = {
  sourceX: 382,
  sourceY: 64,
  sourceWidth: 37,
  sourceHeight: 30,

  destinationX: 450,
  destinationY: 575,
  destinationWidth: 37,
  destinationHeight: 30,
}

context.drawImage(toadImage, Toad2H.sourceX, Toad2H.sourceY, Toad2H.sourceWidth, Toad2H.sourceHeight, Toad2H.destinationX, Toad2H.destinationY, Toad2H.destinationWidth, Toad2H.destinationHeight);

var Toad3H = {
  sourceX: 457,
  sourceY: 60,
  sourceWidth: 35,
  sourceHeight: 36,

  destinationX: 500,
  destinationY: 575,
  destinationWidth: 35,
  destinationHeight: 36,
}

context.drawImage(toadImage, Toad3H.sourceX, Toad3H.sourceY, Toad3H.sourceWidth, Toad3H.sourceHeight, Toad3H.destinationX, Toad3H.destinationY, Toad3H.destinationWidth, Toad3H.destinationHeight);

var ToadSafe1 = {
  sourceX: 1627,
  sourceY: 587,
  sourceWidth: 53,
  sourceHeight: 53,

  destinationX: 44,
  destinationY: 26,
  destinationWidth: 53,
  destinationHeight: 53,
}

context.drawImage(image, ToadSafe1.sourceX, ToadSafe1.sourceY, ToadSafe1.sourceWidth, ToadSafe1.sourceHeight, ToadSafe1.destinationX, ToadSafe1.destinationY, ToadSafe1.destinationWidth, ToadSafe1.destinationHeight);

var ToadSafe2 = {
  sourceX: 1706,
  sourceY: 587,
  sourceWidth: 53,
  sourceHeight: 53,

  destinationX: 258,
  destinationY: 26,
  destinationWidth: 53,
  destinationHeight: 53,
}

context.drawImage(image, ToadSafe2.sourceX, ToadSafe2.sourceY, ToadSafe2.sourceWidth, ToadSafe2.sourceHeight, ToadSafe2.destinationX, ToadSafe2.destinationY, ToadSafe2.destinationWidth, ToadSafe2.destinationHeight);

var DeadFrogBlk = {
  sourceX: 57,
  sourceY: 373,
  sourceWidth: 50,
  sourceHeight: 54,

  destinationX: 258,
  destinationY: 426,
  destinationWidth: 50,
  destinationHeight: 54,
}

context.drawImage(image, DeadFrogBlk.sourceX, DeadFrogBlk.sourceY, DeadFrogBlk.sourceWidth, DeadFrogBlk.sourceHeight, DeadFrogBlk.destinationX, DeadFrogBlk.destinationY, DeadFrogBlk.destinationWidth, DeadFrogBlk.destinationHeight);

var DeadFrogBlue = {
  sourceX: 1337,
  sourceY: 373,
  sourceWidth: 50,
  sourceHeight: 54,

  destinationX: 258,
  destinationY: 226,
  destinationWidth: 50,
  destinationHeight: 54,
}

context.drawImage(image, DeadFrogBlue.sourceX, DeadFrogBlue.sourceY, DeadFrogBlue.sourceWidth, DeadFrogBlue.sourceHeight, DeadFrogBlue.destinationX, DeadFrogBlue.destinationY, DeadFrogBlue.destinationWidth, DeadFrogBlue.destinationHeight);


}

var frameTick = 0;
var rotation = 0;

function runAnimation(){
  requestAnimationFrame(function animateLoop(){
    toadJumpUp();
    // toadJumpLeft();
    // toadJumpDown();
    // toadJumpRight();
    requestAnimationFrame(animateLoop);
  })
}

function toadJumpUp() {
  frameTick ++;
  let myToadUFrame;
  let myToadLFrame;
  let myToadDFrame;
  let myToadRFrame;
  let targetUX = 500
  let targetUY = 500;
  let targetLX = 450;
  let targetLY = 450
  let targetDX = 567;
  let targetDY = 450;
  let targetRX = 383;
  let targetRY = 500;



  if (frameTick > -1) {
    myToadUFrame = Toad3U;
    myToadLFrame = Toad3L;
    myToadDFrame = Toad3D;
    myToadRFrame = Toad3R;
  }
  if (frameTick > 100) {
    myToadUFrame = Toad2U;
    myToadLFrame = Toad2L;
    myToadDFrame = Toad2D;
    myToadRFrame = Toad2R;
  }
  // if (frameTick > 105) {
  //   myToadFrame = Toad1;
  // }
  if (frameTick > 101){
    myToadUFrame = Toad1U;
    myToadLFrame = Toad1L;
    myToadDFrame = Toad1D;
    myToadRFrame = Toad1R;
    context.fillStyle = 'black'
    context.fillRect(targetUX, targetUY, 67, 50);
    context.fillRect(targetLX, targetLY, 67, 50);
    context.fillRect(targetDX, targetDY, 67, 50);
    context.fillRect(targetRX, targetRY, 67, 50)
    targetUY = 475;
    targetLX = 416.5;
    targetDY = 475;
    targetRX = 416.5;
  }
  if (frameTick > 102) {
    myToadUFrame = Toad2U;
    myToadLFrame = Toad2L;
    myToadDFrame = Toad2D;
    myToadRFrame = Toad2R;
    context.fillStyle = 'black'
    context.fillRect(targetUX, targetUY, 67, 50);
    context.fillRect(targetLX, targetLY, 67, 50);
    context.fillRect(targetDX, targetDY, 67, 50);
    context.fillRect(targetRX, targetRY, 67, 50);
    targetUY = 450;
    targetLX = 383;
    targetDY = 500;
    targetRX = 450;
  }
  if (frameTick > 103) {
    myToadUFrame = Toad3U;
    myToadLFrame = Toad3L;
    myToadDFrame = Toad3D;
    myToadRFrame = Toad3R;
    targetUY = 450;
    targetLX = 383;
    targetDY = 500;
    targetRX = 450;
  }
  if (frameTick > 203){
    context.fillStyle = 'black';
    context.fillRect(targetUX, targetUY, 67, 50);
    context.fillRect(targetLX, targetLY, 67, 50);
    context.fillRect(targetDX, targetDY, 67, 50);
    context.fillRect(targetRX, targetRY, 67, 50);
    targetUY = 500;
    targetLX = 450;
    targetDY = 450;
    targetRX = 383;
    frameTick = 0;
  }
  // if (frameTick > 215){
  //   rotation = Math.pi;
  //   myToadFrame = Toad3H;
  // }
  drawToad(myToadUFrame, targetUX, targetUY);
  drawToad(myToadLFrame, targetLX, targetLY);
  drawToad(myToadDFrame, targetDX, targetDY);
  drawToad(myToadRFrame, targetRX, targetRY);
}

function drawToad(whichToad, x, y) {
  let destinationX = x;
  let destinationY = y;
  context.fillStyle = 'black'
  context.fillRect(destinationX, destinationY, 67, 50)
  // context.translate(x, y)
  // context.rotate(rotation);
  context.drawImage(toadImage, whichToad.sourceX, whichToad.sourceY, whichToad.sourceWidth, whichToad.sourceHeight, destinationX, destinationY, whichToad.sourceWidth, whichToad.sourceHeight);
}

var Toad1U = {
  sourceX: 62,
  sourceY: 62,
  sourceWidth: 37,
  sourceHeight: 38,
}


var Toad2U = {
  sourceX: 145,
  sourceY: 62,
  sourceWidth: 30,
  sourceHeight: 35,
}

var Toad3U = {
  sourceX: 221,
  sourceY: 62,
  sourceWidth: 37,
  sourceHeight: 30,
}

var Toad1L = {
  sourceX: 302,
  sourceY: 62,
  sourceWidth: 37,
  sourceHeight: 37,
}

var Toad2L = {
  sourceX: 382,
  sourceY: 64,
  sourceWidth: 37,
  sourceHeight: 30,
}

var Toad3L = {
  sourceX: 457,
  sourceY: 60,
  sourceWidth: 35,
  sourceHeight: 38,
}

var Toad1D = {
  sourceX: 62,
  sourceY: 12,
  sourceWidth: 37,
  sourceHeight: 38,
}


var Toad2D = {
  sourceX: 145,
  sourceY: 12,
  sourceWidth: 30,
  sourceHeight: 35,
}

var Toad3D = {
  sourceX: 221,
  sourceY: 12,
  sourceWidth: 37,
  sourceHeight: 30,
}

var Toad1R = {
  sourceX: 302,
  sourceY: 12,
  sourceWidth: 37,
  sourceHeight: 37,
}

var Toad2R = {
  sourceX: 382,
  sourceY: 14,
  sourceWidth: 37,
  sourceHeight: 30,
}

var Toad3R = {
  sourceX: 457,
  sourceY: 10,
  sourceWidth: 35,
  sourceHeight: 38,
}
