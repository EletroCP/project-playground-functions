// Desafio 10
function techList(tech, name) {
  let sortArray = []
  let array = []
  let list = {}
 
  if(tech.length == 0){
    return "Vazio!"
  
   } else {
     for(index = 0; index < tech.length; index +=1){
       sortArray.push(tech[index])
     }
       sortArray.sort()
      for(let add in sortArray){
        list.tech = sortArray[add]
        list.name = name
        array.push(list)
        list = {}
        
      }
     }return array
   }
// Desafio 11
function generatePhoneNumber(numbers) {
  if(numbers.length !== 11){
    return "Array com tamanho incorreto."
  }
  let comparador = 0
  //verifica se existem repetidos
  for (let index of numbers) {    
    for (let check of numbers) {
      if (index === check) {
        comparador = comparador +1
      }
    }
    if (comparador >= 3) {
      return "não é possível gerar um número de telefone com esses valores"
    }
    comparador = 0
  }
  for (let index of numbers) {
    if(numbers[index] > 9 || numbers[index] < 0){
      return "não é possível gerar um número de telefone com esses valores"
    }
  }
  let telefone = ''
      for(let index = 0; index < numbers.length; index +=1){
        if(index == 0){
          telefone ="(" + numbers[index]
        } else if (index == 1){
          telefone = telefone + numbers[index] + ") "
        } else if (index > 1 && index < 6){
          telefone = telefone + numbers[index]
        }else if(index == 7){
          telefone = telefone + "-" + numbers[index]
        }else{
          telefone = telefone + numbers[index]
        }
      } return telefone
  }


 

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
