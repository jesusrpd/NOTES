// ARRAYS

// ESTO ES UNA ESTRUCTURA DE DATOS
// [1,3,7,8,10] 
// var array = [4,6,'hola']
//           0 1   2

// FORMA DE ACTUALIZAR UN ARRAY
// array[1] = 10
// array[0] = 1
// console.log(array.length);

// RECORRER O ITERAR ARRAYS
// for(var i = 0; i<array.length; i++){
//     console.log(array[i]);
// }

// MÉTODOS DE LOS ARRAYS
// push -> Añadir un elemento en un array al últmo
// console.log(array);
// array.push("nombre")
// console.log(array);

// pop -> Elimina el últmio elemento del array
// array.pop()
// console.log(array);

// shift -> Eliminar el primer elemento del array
// array.shift()
// console.log(array);

// unshift -> Añade un elemento al inicio del array
// array.unshift("manzana")
// console.log(array);

// concat -> Concatar arrays
// var numbers = [1,2,3]
// var numbers2 = [4,5]
// var numbers4 = [6,7]

// console.log(numbers);
// console.log(numbers2);
// var new_array = numbers.concat(numbers2)
// var all_arrays = [...numbers, ...numbers2, ...numbers4]
// console.log(all_arrays);

var array = [1,2,4,5]
var i = 0

// ITERACIÓN DE UN ARRAY CON WHILE
// while(i<array.length){
//     console.log(array[i]);
//     i++
// }

// ITERACIÓN DE UN ARRAY CON FOR
// for(var i = 0; i<array.length; i++){
//     console.log(array[i]);
// }

// ITERACIÓN DE UN ARRAY CON FOR OF
// for(var n of array){
//     console.log(n);
// }

// ITERACIÓN DE UN ARRAY CON FOR EACH
// array.forEach( function( items, index, arra){
//     console.log(items);
// })