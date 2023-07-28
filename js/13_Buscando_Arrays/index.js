// VAMOS A APRENDER LAS DIFERENTES FORMAS DE BUSCAR EN UN ARRAYS

var lista = ['manzanas', 'jabon', 'queso', 'leche']
            // 0            1       2        3
// INDEXOF -> TE ARROJA EL INDICE DONDE SE ENCUENTRA EL ITEM, EN DADO CASO QUE NO LO ENCUENTRE ARROJARÁ -1
// var item = prompt('Dime que quieres buscar')
// var posicion = lista.indexOf(item)

// INCLUDES -> LO QUE SE ENCUENTRA EN LA LISTA TE APARECE TRUE Y LO QUE NO TE APARECE FALSE
var inclu = lista.includes('queso')
// alert(inclu)

// SOME -> BUSCA ELEMENTOS QUE CUMPLAN CON LA CONDICIÓN
var somes = lista.some( function(i){
    return i.length >4
})

// FIND -> BUSCAR ITEMS
var finds = lista.find(function(i){
    return i === 'jabon'
})

// FIND INDEX -> BUSCAR LOS INDICES
var indeces = lista.findIndex(function(i){
    return i.length === 5
})
alert(indeces)
// if(!inclu){
//     alert('Ese item no se encuentra en la lista')
// }else{
//     alert('Este item si se encuentra en la lista')
// }
