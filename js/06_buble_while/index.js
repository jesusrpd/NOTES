// LOS BUCLES NOS SIVERN PARA HACER REPETICIONES DE CIERTO CÓDIGO

// BUCLE WHILE
// var numero = 10;
// while(numero > 0){
//     console.log('Contanto del 10 para abajo: ' + numero);
//     numero = numero - 1;
    
    // if(numero === 7){
        // SE BRINCA LA SIGUIENTE ITERACIÓN
    //     continue;
    // }
    // if(numero === 2){
        // CON BREAK INDICAMOS QUE NUESTRO BUCLE SE DETENGA
        //     break;
        // }
// }


// ANIDAMIENTO DE BUCLES
var contador = 5
var contador2 = 1

// PARTES ESCENCIALES DE UN BUCLE
// 1)Contador
// 2)Condición
// 3)Aztualización

while(contador>0){

    console.log(contador, 'CONSOLE.LOG 1');

    while(contador2<5){

        console.log(contador2, 'CONSOLE.LOG 2');
        contador2 = contador2 + 1;
    }
    
    contador = contador - 1;
}