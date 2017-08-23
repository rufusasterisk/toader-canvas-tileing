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

var Toad1 = {
  sourceX: 1557,
  sourceY: 1611,
  sourceWidth: 193,
  sourceHeight: 33,

  destinationX: 0,
  destinationY: 77,
  destinationWidth: 193,
  destinationHeight: 33,
}

context.drawImage(toadImage, Toad1.sourceX, Toad1.sourceY, Toad1.sourceWidth, Toad1.sourceHeight, Toad1.destinationX, Toad1.destinationY, Toad1.destinationWidth, Toad1.destinationHeight);



}
