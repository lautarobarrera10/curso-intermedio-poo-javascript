// SHALLOW COPY
// Este método sirve para copiar objetos que NO contienen nested objects

// Recuerda que no podemos copiar un objeto con el operador de asignación porque estaríamos copiando su referencia en memoria.

// Otro dato es que cuando trabajamos con objetos que cambian su valor podemos trabajar con const tranquilamente porque este es un apuntar a al memoria heap, por ende no estaríamos modificando su valor en la memmoria stack

const object1 = {
    a: "a",
    b: "b",
}

// MÉTODO 1
// Con un ciclo for
const object2 = {};
for (letter in object1) {
    object2[letter] = object1[letter];
}

// MÉTODO 2
// Con Object.assign()
const object3 = Object.assign({}, object1);

// MÉTODO 3
// Con Object.create()
// La diferencia de este es que guarda el object1 como prototipo del object4
const object4 = Object.create(object1);

// MÉTODO 4
// a mi parecer el más claro, con spread operator
const object5 = {...object1};