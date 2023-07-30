// TRANSFORMAR ARRAYS

// FILTER -> FILTRA LOS ELEMENTOS DE UN ARRAYS
var array = [1,2,3,4,5,6,7,8,9,10]

var evenNumber = array.filter(function(number){
    return number % 2 === 0
})

var textos = ['hola', 'perro', 'peso', 'goma']
var textosWithA = textos.filter(function(text){
    return text.includes('a')
})
// console.log(textosWithA);

// MAP -> ITERA SOBRE UN ARRAY Y PUEDES MODIFICARLO A TU GUSTO
var multiply2 = textos.map(function(text){
    return text.length
})
// console.log(multiply2);

// REDUCE -> OBTENER UN ÚNICO VALOR DE TODO UN ARRAY
var reArray = array.reduce(function(acumulator,current){
    return acumulator + current
})
console.log(reArray);