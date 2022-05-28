//El metodo map lo que hace es crear un array nuevo sin necesidad de tener que crear una variable vacia y tener que pushearlos.
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

//Aca estamos guardando toda esa informacion dentro de un array nuevo.
const autosModificados = Autos.map(auto => auto.modelo)

//Aca estamos diciendo hace una copia del elemento auto y a esa copia modificale la propiedad modelo para que contenga la marca y el modelo en una misma propiedad
const modificarDatos = Autos.map(auto => {
    return {
        ...auto,
        modelo: `${auto.marca} ${auto.modelo}`,
    }})
console.log(modificarDatos)