var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var image = document.getElementById('source');

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

  let testObject = RedE;
  destinationX = 10;
  destinationY = 720;
  destinationWidth = testObject.sourceWidth;
  destinationHeight = testObject.sourceHeight;

  context.drawImage(image, testObject.sourceX, testObject.sourceY, testObject.sourceWidth, testObject.sourceHeight, destinationX, destinationY, destinationWidth, destinationHeight)
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
  sourceWidth: 140,
  sourceHeight: 33,

  destinationX: 0,
  destinationY: 277,
  destinationWidth: 140,
  destinationHeight: 36,
}
context.drawImage(image, TurtleSub.sourceX, TurtleSub.sourceY, TurtleSub.sourceWidth, TurtleSub.sourceHeight, TurtleSub.destinationX, TurtleSub.destinationY, TurtleSub.destinationWidth, TurtleSub.destinationHeight);


var Turtle = {
  sourceX: 1443,
  sourceY: 491,
  sourceWidth: 207,
  sourceHeight: 36,

  destinationX: 0,
  destinationY: 127,
  destinationWidth: 207,
  destinationHeight: 36,
}

context.drawImage(image, Turtle.sourceX, Turtle.sourceY, Turtle.sourceWidth, Turtle.sourceHeight, Turtle.destinationX, Turtle.destinationY, Turtle.destinationWidth, Turtle.destinationHeight);

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



}
