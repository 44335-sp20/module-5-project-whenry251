/* Module 5 Project Script File */
var score = 0;

function questionOne(){
    var answer1 = prompt("1 + 3 = ?");
  if (answer1 == 4) {
    alert("Correct");
      score = score += 100;
      
  } else {
    alert("Incorrect");
  }
    document.getElementById("score").innerHTML = score
}

function questionTwo(){
    var answer2 = prompt("Is the following an incomplete sentence? Walking to the park.");
  if (answer2 == "yes") {
    alert("Correct");
      score = score += 100;
  } else {
    alert("Incorrect");
  }
    document.getElementById("score").innerHTML = score
}

function questionThree(){
    var answer3 = prompt("What is a scientist who studies the weather called? A ______ologist");
  if (answer3 == "meteor") {
    alert("Correct");
      score = score += 100;
  } else {
    alert("Incorrect");
  }
    document.getElementById("score").innerHTML = score
}

function questionFour(){
    var answer4 = prompt("12 x 8 = ?");
  if (answer4 == 96) {
    alert("Correct");
      score = score += 200;
  } else {
    alert("Incorrect");
  }
    document.getElementById("score").innerHTML = score
}

function questionFive(){
    var answer5 = prompt("What is the verb in this sentence? My cat climbed up the tree.");
  if (answer5 == "climbed") {
    alert("Correct");
      score = score += 200;
  } else {
    alert("Incorrect");
  }
    document.getElementById("score").innerHTML = score
}

function questionSix(){
    var answer6 = prompt("Which landform is best described as a low area of land between two large hills or mountains?");
  if (answer6 == "Valley") {
    alert("Correct");
      score = score += 200;
  } else {
    alert("Incorrect");
  }
    document.getElementById("score").innerHTML = score
}

function questionSeven(){
    var answer7 = prompt("12 + 4 x 7 x 0 = ?");
  if (answer7 == 12) {
    alert("Correct");
      score = score += 300;
  } else {
    alert("Incorrect");
  }
    document.getElementById("score").innerHTML = score
}

function questionEight(){
    var answer8 = prompt("Who wrote the book '1984'? George ______");
  if (answer8 == "Orwell") {
    alert("Correct");
      score = score += 300;
  } else {
    alert("Incorrect");
  }
    document.getElementById("score").innerHTML = score
}

function questionNine(){
    var answer9 = prompt("What is the study of elements and compounds called?");
  if (answer9 == "Chemistry") {
    alert("Correct");
      score = score += 300;
  } else {
    alert("Incorrect");
  }
    document.getElementById("score").innerHTML = score
}