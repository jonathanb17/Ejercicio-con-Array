
'use strict'

/*
    1-pida 6 numeros por pantalla y los meta en un array
    2- mostrar el array entero (todos sus elementos) en el cuerpo dela pagina y en consola
    3-ordenarlo y mostrarlo 
    4- Invertir su orden y mostrarlo
    5-mostrar cuantos elementos tiene el array
    6- busquedas de un valor introducido por el usuario,que nos diga si lo encuentra y su indice
*/


 //funcion donde "ordena" (mayor y menor) los valores y la llamo mas abajo 
function funcionDeComparacion1 (elem1, elem2){ 
     return elem1 - elem2;
     }


 //funcion donde "ordena" (mayor y menor) los valores y la llamo mas abajo 
 function funcionDeComparacion2 (elem1, elem2){ 
    return elem2 - elem1;
    }



// con mayuscula el "A"rray

//1-pedir seis numeros 
var numeros =[];

for (var i = 0; i <=5; i++) {
   //Añadimos los elementos con el metodo push al vector
   numeros.push(parseInt(prompt("Ingrse numeros:")));  
}

//2-
//mostramos en el cuerpo dela pagina
document.write("<h1>Contenido del array por el cuerpo de la pagina!</h1>");

numeros.forEach(function(elementos){
        document.write("<li>"+elementos+"</li>");
});
//Muestra el arrays con sus respectivos valores en forma de array en la consola
console.log(numeros);


//3-ordenamos y mostramos,llamamamos la funcion de comparacion y nos ordena NUMEROS
//el metodo sort de porsi ordena string!
document.write("<h1>Los valores ordenado son:</h1>")
numeros.sort(funcionDeComparacion1);
numeros.forEach(function(orden){
        document.write("<li>"+orden+"</li>")
});

//4-

            document.write("<h1>Los valores ordenado en forma reversa es son:</h1>")
            // con el metodo reverse cambio el orden de los elementos del array
            numeros.reverse(funcionDeComparacion2);
            numeros.forEach(function(orden){
                    document.write("<li>"+orden+"</li>");
                });

//5
document.write("<br><br>")
var tamaño= numeros.length;
document.write("<h1>El numero de elementos que tiene este array es:</h1>"+tamaño);

//6-6- busquedas de un valor introducido por el usuario,que nos diga si lo encuentra y su indice
// (lo encuntra al indice,pero con los elementos de forma reversa)

var busqueda = parseInt(prompt("Busca un numero:"));

var posicion= numeros.findIndex(numero => numero == busqueda);

if (posicion && posicion!= -1){
    document.write("<h1>Encontrado</h1>");
    document.write("<h1>Posicion de la busqueda : "+ posicion+"</h1>");
}else{
    document.write("<h1>No Encontrado!</h1>");
}


