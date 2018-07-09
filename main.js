var drawing = SVG('drawing-area');

// function for flowers
    
var drawFlower = function(x, y, petalColor, midColor, centerColor) { 
    var flowerGroup = drawing.group() 
        .center(x, y)
        .scale(2, 2)
    
// stem
drawing
    .rect(10, 110)
    .stroke('green')
    .fill('lime')
    .center(100, 200)
    .addTo(flowerGroup)
    
drawing
    .ellipse(100, 75)
    .stroke(midColor)
    .fill(petalColor)
    .center(150, 100)
    .addTo(flowerGroup)
    
drawing
    .ellipse(100, 75)
    .stroke(midColor)
    .fill(petalColor)
    .center(50, 100)
    .addTo(flowerGroup)
    
drawing
    .ellipse(100, 75)
    .stroke(midColor)
    .fill(petalColor)
    .center(100, 150)
    .rotate(90)
    .addTo(flowerGroup)
    
drawing
    .ellipse(100, 75)
    .stroke(midColor)
    .fill(petalColor)
    .center(100, 50)
    .rotate(90)
    .addTo(flowerGroup)

drawing
    .ellipse(100, 100)
    .stroke(centerColor)
    .fill(centerColor)
    .center(100, 100)
    .addTo(flowerGroup)

}

//do NOT delete this
var beeGroup;
var drawBee = function(x, y, bodyColor, wingColor) { 
    beeGroup = drawing.group() 
        .center(x, y)  
        .scale(0.5, 0.5)
    
        drawing
          .rect(450, 550) 
          .fill('rgba(255, 0, 0, 0.1)')
          .stroke('#adadad') 
          .on('click', moveBee);

        // the bee's body
        drawing
          .ellipse(250, 100)
          .fill(bodyColor)
          .move(10,10)
          .addTo(beeGroup);
    
        drawing
          .ellipse(150, 90)
          .fill(wingColor)
          .move(10,-30)
          .rotate(45)
          .addTo(beeGroup);
    
        drawing
          .ellipse(150, 90)
          .fill(wingColor)
          .move(100,-30)
          .rotate(135)
          .addTo(beeGroup);
    }

var moveBee = function(mouseEvent) {
  console.log(mouseEvent.x, mouseEvent.y);
  beeGroup.move(mouseEvent.x, mouseEvent.y);
}

    //im dying blease

drawFlower(5, 10, 'black', 'black', 'gray') 
drawBee(10, 10, 'yellow', 'rgba(169, 205, 255, 0.48)') 

//drawFlowerWithBox(20, 20, 'cyan', '#0062ff', '#0062ff')
//drawFlowerWithBox(200, 20, '#ffc7da', '#ff0058', '#ff0058')
//drawFlowerWithBox(380, 20, '#bdffbf', '#00c300', '#00c300')