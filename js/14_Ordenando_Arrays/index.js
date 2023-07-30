var array = [1,4,5,6,9,10] //Arrayoriginal
array.sort() //ORDE LOS ELEMENTOS DEL ARRAYS CONSIDERANDO COMO SI FUERAN STRINGS

// DE ESTA FORMA ORDENAMOS LOS ELEMENTOS DE MAYOR A MENOR
array.sort(function(a,b){
    return b-a
})

// DE ESTA FORMA ORDENAMOS LOS ELEMENTOS DE MENOR A MAYOR
array.sort(function(a,b){
    return a-b
})

// COMO BUENA PRACTICA DE PROGRAMACIÓN SIEMPRE QUE SE MODIFIQUE UN ARRAY SIEMPRE TIENES QUE CREAR UNA COPIA DEL MISMO
var copyArray = [...array]
copyArray.sort(function(a,b){
    return a-b
})
console.log(copyArray);