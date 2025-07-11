let fScore = document.getElementById("first_score");

let secScore = document.getElementById("second_score");

let num = 0;
let num1 = 0;

function first_one() {
  num = num + 1;
  fScore.textContent = num;
}

function first_two() {
  num = num + 2;
  fScore.textContent = num;
}

function first_three() {
  num = num + 3;
  fScore.textContent = num;
}

function second_one() {
  num1 = num1 + 1;
  secScore.textContent = num1;
}

function second_two() {
  num1 = num1 + 2;
  secScore.textContent = num1;
}

function second_three() {
  num1 = num1 + 3;
  secScore.textContent = num1;
}
