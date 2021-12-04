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
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = mouse - cat1
  let distanciaCat2 = mouse - cat2
  if(distanciaCat1 < 0){
    distanciaCat1 = distanciaCat1 * -1
  }
  if(distanciaCat2 < 0){
    distanciaCat2 = distanciaCat2 * -1
  }
  if(distanciaCat1 < distanciaCat2){
    return "cat1"
  }else if(distanciaCat2 < distanciaCat1){
    return "cat2"
  }else if(distanciaCat1 == distanciaCat2){
    return "os gatos trombam e o rato foge"
  }
}
// Desafio 8
function fizzBuzz(param) {
  let result = []
  for(let index = 0; index < param.length; index +=1){
    if(param[index] % 3 == false && param[index] % 5 == false){
      result.push("fizzBuzz")
    } else if(param[index] % 5 == false){
      result.push("buzz")
    }else if(param[index] % 3 == false){
      result.push("fizz")
    }else{
      result.push("bug!")
    }
}
return result
}
// Desafio 9
function encode(codeString) {
  let codado = codeString.split("")
   for(index = 0; index < codado.length; index +=1){
     switch(codado[index]){
       case "a":
         codado[index] = "1";
         break
       case "e":
         codado[index] = "2"
         break
       case "i":
         codado[index] = "3"
         break
       case "o":
         codado[index] = "4"
         break
       case "u":
         codado[index] = "5"
         break     
      }
   }
    return codado.join("")
    
}
function decode(dCode) {
  let decodado = dCode.split("")
  for(index = 0; index < decodado.length; index +=1){
    switch(decodado[index]){
      case "1":
        decodado[index] = "a";
        break
      case "2":
        decodado[index] = "e"
        break
      case "3":
        decodado[index] = "i"
        break
      case "4":
        decodado[index] = "o"
        break
      case "5":
        decodado[index] = "u"
        break     
     }
  }
   return decodado.join("")
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
