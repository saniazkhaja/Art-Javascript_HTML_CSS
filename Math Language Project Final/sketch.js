// By: Sania Khaja
// ART 151
// Math/Language Project
// An interactive art piece that allows the user to change background colors, shape colors, the shape, transparency and border thickness. Creates a 3D view when mouse is clicked and drawn with, by changing size of shape based on position. This is applicable for the rectangle and ellipse. For the triangle, the speed at which the mouse is moved adds an 3D affect to the drawing. The slower the mouse moves, the more dimension the drawing has. The random button chooses a random color, transparency, shape and border thickness to add more variety to the program.I also made the canvas window width and height to allow more room for th user to draw. I used the math round function when the user is drawing which I thought would produce a more clear looking image since the pixels would be rounded and not always fractional. The user can also just click and create a cool canvas that way, without dragging the mouse while clicking

// the words on the button and the user being able to use those words to then create a picture, shows how math and language are related. The words in a sense are creating a shapes when clicked on which then shows math

let shapeColor; 
let theShape;
let transparency;
let borderThickness = 1;
let currentColor = "White";

let red;
let green;
let blue;

// used to set up background and buttons
function setup() {
  createCanvas(windowWidth, windowHeight);
  // this allows for a random background color to be chosen each time the program is run
  let redBackground = random(0, 255);
  let greenBackground = random(0, 255);
  let blueBackground = random(0, 255);
  background (redBackground, greenBackground, blueBackground);
  
  // setting color from the random values  
  let col = color(redBackground, greenBackground, blueBackground); 
  // creating button to change background and styling button
  backgroundButton = createButton("Change Background Color and Reset Canvas");
  backgroundButton.style('font-size','25px');
  backgroundButton.style('background-color', col);
  backgroundButton.position((windowWidth / 2) - 250, 0);
  
  // used to choose random color, transparency, shape and border thickness
  randomButton = createButton("Random");
  randomButton.style('font-size','20px');
  randomButton.style('background-color', col);
  randomButton.position(windowWidth / 2, 50);
  
  // creating button to change color of shape to red
  redShapeButton = createButton("Red Shape");
  redShapeButton.style('font-size','15px');
  redShapeButton.style('background-color', color(255, 0, 0));
  redShapeButton.position(20, 100);
  
  // buttton to change color of shape to green
  greenShapeButton = createButton("Green Shape");
  greenShapeButton.style('font-size','15px');
  greenShapeButton.style('background-color', color(0, 255, 0));
  greenShapeButton.position(20, 150);
  
  // button to change color of shape to blue
  blueShapeButton = createButton("Blue Shape");
  blueShapeButton.style('font-size','15px');
  blueShapeButton.style('background-color', color(0, 0, 255));
  blueShapeButton.position(20, 200);
  
  
  // creating rectangle and then creating button for rectangles to be created
  fill (0, 0, 0);
  rect(windowWidth - 135, 100, 25, 25);
  rectButton = createButton("Rectangle");
  rectButton.style('font-size','15px');
  rectButton.style('background-color', color(255, 255, 255));
  rectButton.position(windowWidth - 100, 100);
  
  // creating ellipse and then creating button for ellipses to be created
  ellipse(windowWidth - 125, 160, 25, 25);
  ellipseButton = createButton("Ellipse");
  ellipseButton.style('font-size','15px');
  ellipseButton.style('background-color', color(255, 255, 255));
  ellipseButton.position(windowWidth - 100, 150);
  
  // creating triangle and then creating button for triangles to be created
  triangle(windowWidth - 125, 220, windowWidth - 150,  200, windowWidth - 100, 200);
  triangleButton = createButton("Triangle");
  triangleButton.style('font-size','15px');
  triangleButton.style('background-color', color(255, 255, 255));
  triangleButton.position(windowWidth - 100, 200);
  
  // button for transparency of shape
  transparencyButton = createButton("Transparency");
  transparencyButton.style('font-size','15px');
  transparencyButton.style('background-color', color(255, 255, 255, 50));
  transparencyButton.position(20, 300);
  
  // button for no transparency of shape
  noTransparencyButton = createButton("No Transparency");
  noTransparencyButton.style('font-size','15px');
  noTransparencyButton.style('background-color', color(255, 255, 255));
  noTransparencyButton.position(20, 350);
  
  // displays what a thin border would look like and then creates button for it
  strokeWeight(1);
  line(windowWidth - 150, 310, windowWidth - 120, 310);
  thinStrokeButton = createButton("Thin Border");
  thinStrokeButton.style('font-size','15px');
  thinStrokeButton.style('background-color', color(255, 255, 255));
  thinStrokeButton.position(windowWidth - 100, 300);
  
  // displays what a thick border would look like and then displays button for it
  strokeWeight(5);
  line(windowWidth - 150, 360, windowWidth - 120, 360);
  thickStrokeButton = createButton("Thick Border");
  thickStrokeButton.style('font-size','15px');
  thickStrokeButton.style('background-color', color(255, 255, 255));
  thickStrokeButton.position(windowWidth - 100, 350);
}

// used to change background color to a random color
function changeBG() {
  let redBackground = random(0, 255);
  let greenBackground = random(0, 255);
  let blueBackground = random(0, 255);
  background (redBackground, greenBackground, blueBackground);
  let col = color(redBackground, greenBackground, blueBackground);
  backgroundButton.style('background-color', col);
}

// changes shape fill to red
function changeShapeToRed() { 
  currentColor = "Red";
}

// changes shape fill to green
function changeShapeToGreen() {
  currentColor = "Green";
}

// changes shape fill to blue
function changeShapeToBlue() {
  currentColor = "Blue";
}

// used to know the shape is arectangle
function rectShape() {
  theShape = "Rectangle";
}

// used to know the shape is an ellipse
function ellipseShape() {
  theShape = "Ellipse";
}

// used to know the shape is a triangle
function triangleShape() {
  theShape = "Triangle";
}

// used to know the shape is partially transparent
function transparent() {
  transparency = 20;
}

// used to know the shape is not transparent at all
function notTransparent() {
  transparency = 255;
}

// used to know the border thickness of shape is thin
function thinStroke() {
  borderThickness = 1;
}

// used to know the border thickness of shape is thick
function thickStroke() {
  borderThickness = 5;
}

// chooses random shape, border thickness and transparency
function chooseRandom() { 
  // choosing random shape
  let shapes = random(["Rectangle", "Ellipse", "Triangle"]);
  if (shapes == "Rectangle") {
    theShape = "Rectangle";
  } else if (shapes == "Ellipse") {
    theShape = "Ellipse";
  } else {
    theShape = "Triangle";
  }
  
  // choosing random border thickness
   borderThickness = random(0, 7);
  
  // choosing random transparency
  transparency = random(10, 255);
  
  currentColor = "Random";
  red = random(0, 255);
  green = random(0, 255);
  blue = random(0, 255);

  // chooses random color for actual button
  let redBackground = random(0, 255);
  let greenBackground = random(0, 255);
  let blueBackground = random(0, 255);
  col = color(redBackground, greenBackground, blueBackground);
  randomButton.style('background-color', col);
}

// used to draw out all the shapes, colors, etc
function draw() {
  //checking for mouse press for background change
  backgroundButton.mousePressed(changeBG);
  
  // making sure that shapes next buttons will not get covered
  fill (0, 0, 0);
  rect(windowWidth - 135, 100, 25, 25);
  ellipse(windowWidth - 125, 160, 25, 25);
  triangle(windowWidth - 125, 220, windowWidth - 150,  200, windowWidth - 100, 200);
  
  strokeWeight(1);
  line(windowWidth - 150, 310, windowWidth - 120, 310);
  strokeWeight(5);
  line(windowWidth - 150, 360, windowWidth - 120, 360);
  
  // checking color if button pressed
  redShapeButton.mousePressed(changeShapeToRed);
  greenShapeButton.mousePressed(changeShapeToGreen);
  blueShapeButton.mousePressed(changeShapeToBlue);
  
  // checking for shape pressed
  rectButton.mousePressed(rectShape);
  ellipseButton.mousePressed(ellipseShape);
  triangleButton.mousePressed(triangleShape);
  
  // checking for transperacy press
  transparencyButton.mousePressed(transparent);
  noTransparencyButton.mousePressed(notTransparent);
  
  // checking for border mouse click
  thinStrokeButton.mousePressed(thinStroke);
  thickStrokeButton.mousePressed(thickStroke);
  
  // used to choose random of all factors
  randomButton.mousePressed(chooseRandom);
  
  
  // used to know what color and how much transparency is needed
  if (currentColor == "Red") {
    shapeColor = fill(255, 0, 0, transparency);
  } else if (currentColor == "Green") {
    shapeColor = fill(0, 255, 0, transparency);
  } else if (currentColor == "Blue") {
    shapeColor = fill(0, 0, 255, transparency);
  } else if (currentColor == "White") {
    shapeColor = fill(255, 255, 255, transparency);
  } else {
    // displays random color and transparency
    shapeColor = fill(red, green, blue, transparency); 
  }
  
  // setting border thickness to what is needed
  strokeWeight(borderThickness);
 
  // border color is black
  stroke(0);
  
  // mouse press is used to know if shape needs to be drawn or not
  if (mouseIsPressed) {
    // checking which shape to display
    if (theShape == "Rectangle") {
      rect(round(mouseX), round(mouseY), round(mouseX), round(mouseY)); // mouse position creates dimension
    } else if (theShape == "Ellipse") {
      ellipse(round(mouseX), round(mouseY), round(mouseX), round(mouseY)); // mouse position creates dimension
    } else {
      triangle(round(mouseX), round(mouseY), round(mouseX) - 100, round(mouseY) - 100, round(mouseX) + 100, round(mouseY) - 100);
    } 
  }

}