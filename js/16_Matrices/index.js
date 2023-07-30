// MATRICES
var matriz = [
   //0 1
    [1,2,5], //0
    [3,4]  //1
]

// DE ESTA FORMA ACCEDEMOS A LOS VALORES DE UNA MATRIZ 
// console.log(matriz[1][1]);

for(var i = 0; i<matriz.length;i++){
    for(var j = 0; j<matriz[i].length; j++){
        console.log(matriz[i][j]);
    }
}