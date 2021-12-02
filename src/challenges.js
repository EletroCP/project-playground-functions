// Desafio 1
function compareTrue(v1, v2) {
  if (v1 === true && v2 === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  let resultado = 0;
  resultado = (base * height) / 2;
  return resultado
}

// Desafio 3
function splitSentence(frase) {
  let splitString = frase.split(" ")
  return splitString
}

// Desafio 4
function concatName(name) {
  let concat = name[name.length - 1] + ', ' + name[0]
  return concat
}


// Desafio 5
function footballPoints(wins, ties) {
  let pointWin = wins * 3
  let pointTies = ties
  let points = pointWin + pointTies
  return points
}

// Desafio 6
function highestCount(numbers) {
  let highest = -100
  let compare = 0
  for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > highest) {
      highest = numbers[index] 
    }
  }
  for (equal = 0; equal < numbers.length; equal += 1) {
    if (numbers[equal] === highest) {
      compare = compare + 1
    }
  }
  return compare
}
// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
