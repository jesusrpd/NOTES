// FUNCINOES

// BLOQUES DE CÓDIGO QUE VAN A SER REUTILIZABLES

// ESTA ES UNA FUNCIÓN IMPLICITAS
function saludar(name){
    console.log('Hola ' + name);
}

// ESTA ES UNA FUNCIÓN EXPLICITA POR EL RETURN 
function suma(){
    return 1 +1 
}

var numero = suma()  // undefined
// CREAR UN CÓDIGO QUE NOS DEVUELVA UN NÚMERO ENTRE EL 1 AL 10
function getRandom(){
    var random = Math.random()  // 0.54560945645
    var multipled = random * 10
    var rounded = Math.floor(multipled)
    var result = rounded + 1
    return result
}

// console.log(getRandom());

function suma (number1, number2){
    return number1 + number2
}

// PARAMETROS
saludar('Axel')
saludar('Jesús')

console.log(suma(2,2));
console.log(suma(7,5));


function getRandomAleatori(aleatorio){
    var random = Math.random()  // 0.54560945645
    var multipled = random * aleatorio
    var rounded = Math.floor(multipled)
    var result = rounded + 1
    return result
}

console.log(getRandomAleatori(5));
console.log(getRandomAleatori(20));
console.log(getRandomAleatori(30));