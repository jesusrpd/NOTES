// SWITCHES

// SON LO MISMO QUE LAS CONDICIONALES SOLO QUE CON UNA FORMA DIFERENTE DE ESCRIBIRSE
var numero = 6;
switch (numero){
    
    case 4: 
    case 5: 
        console.log('El número es 4 o 5'); break

    default: console.log('Es otro número'); break
}


var dia = new Date().getDay();

switch(dia){
    case 0: console.log('Es Domingo'); break

    case 1: console.log('Es Lunes'); break

    case 2: console.log('Es Martes'); break

    case 3: console.log('Es Miercoles'); break

    case 4: console.log('Es Jueves'); break

    default: console.log('Algo esta mal');
}