function rollDie(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function D6Result() {
  let result = rollDie(1, 6);
  let div = document.getElementById("D6Call");
  div.textContent = result;
}

function D8Result() {
  let result2 = rollDie(1, 8);
  let div2 = document.getElementById("D8Call");
  div2.textContent = result2;
}

function D10Result() {
  let result3 = rollDie(1, 10);
  let div3 = document.getElementById("D10Call");
  div3.textContent = result3;
}

function clearD6() {
  document.getElementById("D6Call").textContent = "";
}

function clearD8() {
  document.getElementById("D8Call").textContent = "";
}

function clearD10() {
  document.getElementById("D10Call").textContent = "";
}

// rollDie(1, 6);

// if (rollDie(1, 6) >= 7) {
//   throw new Error("Test Failed");
// }

// rollDie(1, 8);

// if (rollDie(1, 8) >= 9) {
//   throw new Error("Test Failed");
// }

// rollDie(1, 10);

// if (rollDie(1, 10) >= 11) {
//   throw new Error("Test Failed");
// }
// console.log("Tests Passed");
// console.log(rollDie(1, 6));
