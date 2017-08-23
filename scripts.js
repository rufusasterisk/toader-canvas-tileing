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


// context.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, destinationX, destinationY, destinationWidth, destinationHeight)
// console.log('hello javascript');

// context.drawImage(image, 140, 60, 40, 43, 25, 75, 40, 43)
window.onload = function() {
  for (var i = 0; i < 19; i++) {
    context.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, destinationX + 54 * i, destinationY, destinationWidth, destinationHeight)
  }
  context.fillStyle = 'black';
  context.fillRect(0, 375, 1000, 200);

  context.fillStyle = 'green';
  context.fillRect(0, 25, canvas.width, 50);

  context.fillStyle = 'green';
  context.fillRect(0, 0, canvas.width, 25);

  for (i = 0; i < 5; i++) {
    context.fillStyle = 'black';
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

  context.drawImage(image, Center.sourceX, Center.sourceY, Center.sourceWidth, Center.sourceHeight, destinationX, destinationY, destinationWidth, destinationHeight)
  // context.drawImage(image, Center.sourceX, Center.sourceY, Center.sourceWidth, Center.sourceHeight, destinationX + 27, destinationY, destinationWidth, destinationHeight)

  function drawBlock(Block, startX, startY, counter) {
    for (i = 0; i < counter; i++) {
      context.drawImage(image, Block.sourceX, Block.sourceY, Block.sourceWidth, Block.sourceHeight, startX + (215 * i), startY, Block.sourceWidth, Block.sourceHeight)
    }
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
  drawBlock(Center, 5, 2, 5)
  drawBlock(TopRight, 97, 2, 5);
}
