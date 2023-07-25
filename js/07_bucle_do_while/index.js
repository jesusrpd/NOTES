// BUCLES DO WHILE -> Hace exactamente lo mismo que el bucle while

// LA DIFERENCIA CON EL WHILE ES QUE EL BUCLE DO WHILE PRIMERO NOS VA 
// A HACER EL CÓDIGO QUE VIENE DENTRO DE LAS LLAVES Y DESPUÉS VA A 
// PREGUNTAR SI LA CONDICIÓN ES CIERTA PARA SABER SI SEGUIR REPITIENDO 
// EL CÓDIGO
var contador = 10
do{
    console.log(contador, ' BUCLE DO WHILE');
    contador = contador + 1;

} while(contador <= 5)