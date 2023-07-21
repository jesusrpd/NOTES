// IF (CONDICIONALES)

var edad_usuario = 18;

if(edad_usuario >= 18){
    //Código o lógica de tu programa
    console.log('tiene más de 18');
}else{
    console.log('tiene menos de 18');
}


// ELSE IF 
var calificacion = 6
if(calificacion <= 5){
    console.log('estas reprobado');
}else if(calificacion > 5 && calificacion<8){
    console.log('aprobaste pero echale más ganas');
}else{
    console.log('estas aprobado');
}


// CONCATENACIÓN DE CONDICIONALES
var calificacion = 6;

if(calificacion <= 5){
    
    if(calificacion === 0){
        console.log(0);
    }else if(calificacion === 2){
        console.log(2);
        
    }

}else if(calificacion > 5 && calificacion<8){

    console.log('aprobaste pero echale más ganas');

}else{

    console.log('estas aprobado');

}