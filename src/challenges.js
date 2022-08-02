// Desafio 1
function compareTrue(v1, v2) {
  if (v1 === true && v2 === true) {
    return true;
  }
  return false;
}
// Desafio 2
function calcArea(base, height) {
  let resultado = 0;
  resultado = (base * height) / 2;
  return resultado;
}
// Desafio 3
function splitSentence(frase) {
  let splitString = frase.split(' ');
  return splitString;
}
// Desafio 4
function concatName(name) {
  let concat = `${name[name.length - 1]}, ${name[0]}`;
  return concat;
}
// Desafio 5
function footballPoints(wins, ties) {
  let pointWin = wins * 3;
  let pointTies = ties;
  let points = pointWin + pointTies;
  return points;
}
// Desafio 6
function highestCount(numbers) {
  let highest = -100;
  let compare = 0;
  numbers.foreach((element) => {
    if (element > highest) {
      highest = element;
    }
  });
  numbers.foreach((element) => {
    if (element === highest) {
      compare += 1;
    }
  });
  return compare;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = mouse - cat1;
  let distanciaCat2 = mouse - cat2;
  if (distanciaCat1 < 0) {
    distanciaCat1 *= -1;
  }
  if (distanciaCat2 < 0) {
    distanciaCat2 *= -1;
  }
  if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  }
  if (distanciaCat2 < distanciaCat1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}
// Desafio 8
function fizzBuzz(param) {
  let result = [];
  param.foreach((element) => {
    if (element % 3 === false && element % 5 === false) {
      result.push('fizzBuzz');
    }
    if (element % 5 === false) {
      result.push('buzz');
    }
    if (element % 3 === false) {
      result.push('fizz');
    }
    result.push('bug!');
  });

  return result;
}
// Desafio 9
function encode(codeString) {
  const codado = codeString.replaceAll('a', 1)
    .replaceAll('e', 2)
    .replaceAll('i', 3)
    .replaceAll('o', 4)
    .replaceAll('u', 5);
  return codado;
}
function decode(dCode) {
  const codado = dCode.replaceAll(1, 'a')
    .replaceAll(2, 'e')
    .replaceAll(3, 'i')
    .replaceAll(4, 'o')
    .replaceAll(5, 'u');
  return codado;
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
