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

  destinationX = 120;
  destinationY = 2;
  destinationWidth = Center.sourceWidth;
  destinationHeight = Center.sourceHeight;

  //context.drawImage(image, Center.sourceX, Center.sourceY, Center.sourceWidth, Center.sourceHeight, destinationX, destinationY, destinationWidth, destinationHeight)
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

var Toad1 = {
  sourceX: 63,
  sourceY: 62,
  sourceWidth: 37,
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
