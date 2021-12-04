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
function generatePhoneNumber() {
  // seu código aqui
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
