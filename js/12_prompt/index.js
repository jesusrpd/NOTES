// PROMPT
// var respuesta = prompt("Dime cuantos años tienes?")


// if(respuesta < 18){
//     alert('Eres menor de edad');
// }else if( respuesta > 18){
//     alert('Eres mayor de edad');
// }


var numero = prompt("Dime que número elevo al cuadrado")

// TYPEOF SIRVE PARA SABER QUE TIPO DE DATO ES UNA VARIABLE
console.log(typeof numero);
console.log(typeof Number(numero));
// CON NUMBER CONVERTIMOS UNA VARIABLE DE TIPO NUMBER
console.log(Number(numero) + 6);

String(23) // "23" -> Transforma datos a Strings
parseInt(23.5) //23  -> Convierte número decimales a enteros
parseFloat(5) //5.0 -> Convierte de un número entero a decimal
// 0 -> false 
// 1 en adelante -> true
Boolean(20) // true  -> Transforma datos a Booleans
Boolean(0) // false