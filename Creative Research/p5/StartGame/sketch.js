// My research question was, 
// what external factors affect crime and how do these factors affect the crime rate and different types of crime? 
// I basically wanted to explore the factors that affect crime. 

// declarinng variables
let slider = [];
let factors = ["Temperature", "Gun Ownership", "Unemployment Rates", "Population", "Poverty Level", "Teens, 20s, 30s Aged Population", "Precipitation", "Lack of Jobs"];
let factorAmounts = [];

// sets up the page
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(10, 20, 40);
  // text color, font and size
  fill(255);
  textFont("Baskerville");

  // creating all the sliders. Column 1 of sliders
  for (let index = 0; index < 4; index++) {
    slider[index] = createSlider(1, 10, 5, 1);
    slider[index].position(75, 300 + (100 * index));
    slider[index].style('width', '200px');
  }
  // Column 2 of sliders
  for (let index = 4; index < 8; index++) {
    slider[index] = createSlider(1, 10, 5, 1);
    slider[index].position(1000, 300 + (100 * (index - 4)));
    slider[index].style('width', '200px');
  }
}


// deals with displaying text
function draw() {
  background(10,20, 40);
  textSize(17);
  fill(0);
  textStyle(NORMAL);
  // updates factor amounts when user makes a change for the sliders
  for (let index = 0; index < 8; index++) {
    factorAmounts[index] = slider[index].value();
  }

  // displaying low and high next to each slider
  fill(255);
  for (let index = 0; index < 4; index++) {
    text("low", 25, 110 + (100 * index));
    text("high", 300, 110 + (100 * index));
  }
  for (let index = 4; index < 8; index++) {
    text("low", 950, 110 + (100 * (index - 4)));
    text("high", 1225, 110 + (100 * (index - 4)));
  }

  textStyle(BOLD);
  textSize(20);
  // printing each of the factors above slider
  for (let index = 0; index < 4; index++) {
    text(factors[index], 75, 70 + (100 * index));
  }
  for (let index = 4; index < 8; index++) {
    text(factors[index], 1000, 70 + (100 * (index - 4)));
  }
  calculateOverallCrime();
  calculateViolentCrime();
  calculateTheftCrime();
  calculateRobberyBurglaryCrime();
  calculateGunCrime();
}


// used for calculating overall crime amount
// uses color and numbers to show how crime is changing
// stats whether the crime is low or high based on crime amount
function calculateOverallCrime() {
  let crimeAmount = 0;
  // going through each factor to figure out crime rate
  for (let i = 0; i < 8; i++) {
    if (i == 1 || i == 6) {
      crimeAmount = crimeAmount + (factorAmounts[i] * 0.5);
    } else if (i == 2 || i == 3 || i == 4 || i == 5) {
      crimeAmount = crimeAmount + (factorAmounts[i] * 2);
    } else {
      crimeAmount = crimeAmount + factorAmounts[i];
    }
  }
  textSize(30);
  textStyle(BOLD);
  // the more red the color is, the more crime there is
  // the more green the color is the less crime there is
  // inversely related
  fill(crimeAmount * 3, (255 - (crimeAmount * 2)), 0);
  text("Overall Crime: " + crimeAmount, 525, 100);

  textStyle(BOLD);
  textSize(20);

  // going through crimeAmount and deciding if it is low or high
  if (crimeAmount <= 20) {
    text("Extremely low amount of crime! :)", 510, 140);
  } else if (crimeAmount > 20 && crimeAmount <= 40) {
    text("Low amount of crime!", 555, 140);
  } else if (crimeAmount > 40 && crimeAmount <= 70) {
    text("Normal amount of crime", 545, 140);
  } else if (crimeAmount > 70 && crimeAmount <= 99) {
    text("High amount of crime", 560, 140);
  } else if (crimeAmount > 99 && crimeAmount <= 110) {
    text("Extremely high amount of crime :(", 520, 140);
  }
}


// factors that affect violent crimes are temperature, gun ownership, unemployment rates, job availibilty
function calculateViolentCrime() {
  textStyle(BOLD);
  textSize(20);

  // using multipliers and addition to calculate crime amount
  let crimeAmount = factorAmounts[0] + factorAmounts[1] + factorAmounts[2] + (factorAmounts[7] * 0.5);

  // figuring out appropriate color
  fill(crimeAmount * 7, 255 - (crimeAmount * 7), 0);

  // sees if biolent crime is greater or less than a certain amount to determine amount of crime
  if (crimeAmount <= 5) {
    text("Extremely low amount of violent crime! :)", 480, 200);
  } else if (crimeAmount > 5 && crimeAmount <= 15) {
    text("Low amount of violent crime!", 515, 200);
  } else if (crimeAmount > 15 && crimeAmount <= 20) {
    text("Normal amount of violent crime", 515, 200);
  } else if (crimeAmount > 20 && crimeAmount <= 30) {
    text("High amount of violent crime", 530, 200);
  } else if (crimeAmount > 30 && crimeAmount <= 35) {
    text("Extremely high amount of violent crime :(", 480, 200);
  }

}


// factors that affect theft are temperature, unemployment, poverty level
function calculateTheftCrime() {
  textStyle(BOLD);
  textSize(20);

  // calculating the crime amount
  // multipliers used
  let crimeAmount = factorAmounts[0] * 0.5 + (factorAmounts[2] * 2) + (factorAmounts[4] * 2);

  // figuring out appropriate color
  fill(crimeAmount * 5, 255 - (crimeAmount * 5), 0);

  // needed to skew data
  // used in order to figure out of thefts are normal, high or low
  if (crimeAmount <= 7) {
    text("Extremely low amount of theft! :)", 510, 260);
  } else if (crimeAmount > 7 && crimeAmount <= 15) {
    text("Low amount of theft!", 555, 260);
  } else if (crimeAmount > 15 && crimeAmount <= 30) {
    text("Normal amount of theft", 545, 260);
  } else if (crimeAmount > 30 && crimeAmount <= 40) {
    text("High amount of theft", 560, 260);
  } else if (crimeAmount > 40 && crimeAmount <= 45) {
    text("Extremely high amount of theft :(", 520, 260);
  }
}

// factors that affect this are temperature, precipitation
function calculateRobberyBurglaryCrime() {
  textStyle(BOLD);
  textSize(20);

  // will end up creating a bell curve type of distribution
  let crimeAmount = factorAmounts[0] * factorAmounts[6];
  // figuring out appropriate color
  fill(crimeAmount * 2 + 50, (255 - (crimeAmount * 2) - 50), 0);

  // used in order to figure out if robberies/burgularies are normal, high or low
  if (crimeAmount <= 20) {
    text("Extremely low amount of robberies/burglaries! :)", 460, 320);
  } else if (crimeAmount > 20 && crimeAmount <= 40) {
    text("Low amount of robberies/burglaries!", 505, 320);
  } else if (crimeAmount > 40 && crimeAmount <= 60) {
    text("Normal amount of robberies/burglaries", 495, 320);
  } else if (crimeAmount > 60 && crimeAmount <= 80) {
    text("High amount of robberies/burglaries", 510, 320);
  } else if (crimeAmount > 80 && crimeAmount <= 100) {
    text("Extremely high amount of robberies/burglaries :(", 470, 320);
  }
}


// factor that affects gun crime is mainly gun ownership
// text color changes based on how high or low gun crime is
function calculateGunCrime() {
  textStyle(BOLD);
  textSize(20);

  fill(factorAmounts[1] * 25 - 20, 255 - (factorAmounts[1] * 25), 0);
  // going through gun factor amount to see if the crime would be high or not
  if (factorAmounts[1] == 1 || factorAmounts[1] == 2) {
    text("Extremely low amount of gun crime! :)", 510, 380);
  } else if (factorAmounts[1] == 2 || factorAmounts[1] == 3) {
    text("Low amount of gun crime!", 555, 380);
  } else if (factorAmounts[1] == 4 || factorAmounts[1] == 5 || factorAmounts[1] == 6) {
    text("Normal amount of gun crime", 545, 380);
  } else if (factorAmounts[1] == 7 || factorAmounts[1] == 8) {
    text("High amount of gun crime", 560, 380);
  }else if (factorAmounts[1] == 9 || factorAmounts[1] == 10) {
    text("Extremely high amount of gun crime :(", 520, 380);
  } 
}
