//Lo que hace el forEach es recorrer un arreglo.
const Autos = [
    {
        id: 1,
        marca: 'Ford',
        modelo: 'Focus'
    },
    {
        id: 2,
        marca: 'Fiat',
        modelo: 'Punto'
    },
    {
        id: 3,
        marca: 'Chevrolet',
        modelo: 'Corsa'
    },
    {
        id: 4,
        marca: 'Renault',
        modelo: 'Logan'
    }
];

//Quiero que me muestres cada auto (elemento) dentro de Autos (contenedor de esos elementos);
Autos.forEach(auto => console.log(auto));

//El forEach solamente se encarga de recorrer esos elementos, no retorna nada. En caso de querer guardar algo se debe indicar dentro de la funcion

//Guardando el modelo de cada auto en un arreglo vacio.
let guardarModelo = [];
Autos.forEach(auto => guardarModelo.push(auto.modelo));

//Todos los arreglos tiene una posicion (indice) para poder acceder a cada uno. Si nosotros quisieramos que por cada iteracion (recorrida de un arreglo) saber la posicion del elemento lo hariamos de la siguiente manera.
let guardarMarca = [];
Autos.forEach((auto, indice) => {guardarMarca.push(auto.marca, indice)});

/* Como se puede ver arriba, existen 3 posibles parametros que se le puede pasar a un metodo forEach.
el primer parametro es el elemento, el segundo es el indice (index = posicion), el tercero es el arreglo.
Autos.forEach((auto, indice, arreglo))
TODOS los arreglos empiezan desde el indice 0.
*/
Autos.forEach((auto, index, array) => {
    console.log(auto.modelo);
    console.log(index);
    console.log(array)
})


