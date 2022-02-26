//Cuando dentro de las clases creamos atributos con el palabra "static" al principio, vamos a poder llamar
//a ese atributo desde afuera sin necesidad de hacer una instancia de la clase.

// EJEMPLOS

class Auto {
    static sonidoDeMotor = "Runnn";
    static arrancarAuto() {
        this.sonidoDeMotor;
    }
}

Auto.sonidoDeMotor;
Auto.arrancarAuto();

// MÉTODOS DEL SUPERPROTOTIPO OBJECT
// Ahora vamos a aprender los métodos estáticos que tiene el superprototipo object.

const fiatDuna = {
    brand: "Fiat",
    model: "Duna",
    age: 1995,
}

// Retorna un array con las keys del objeto
Object.keys(fiatDuna);

// Retorna un array con los nombres de las propiedades de nuestro objeto
Object.getOwnPropertyNames(fiatDuna);

// Retorna un array con arrays dentro. Donde los arrays de adentro contienen el nombre y el valor de cada propiedad.
Object.entries(fiatDuna);

// Retorna un objeto donde cada key es una propiedad de nuestro objecto inicial y su valor es otro objeto que contiene las propiedades de value, writable, enumerable y configurable
Object.getOwnPropertyDescriptors(fiatDuna);

// Sirve para definir las propiedades de nuestro objeto, incluyendo las de value, writable, enumerable y configurable
// Debemos enviarle 3 argumentos:
// 1- El objeto que vamos a modificar.
// 2- El nombre de la propiedad que queremos definir
// 3- El valor de la propiedad que quremos definir (debe ser un objecto)
Object.defineProperty(fiatDuna, "dueño",{
    value: "Lautaro",
    writable: false, // No permite que se modifique el valor
    configurable: false, // No permite que se elimine la propiedad
    enumerable: false, // No permite que se acceda desde Object.key(fiatDuna)
});

fiatDuna.dueño = "pedro"; // Intento modificar el valor de "dueño"
delete fiatDuna.dueño; // Intento eliminar la propiedad "dueño"


// No solo sirve para crear nuevas propiedades sino que también se pueden modificar las existentes
Object.defineProperty(fiatDuna, "age",{
    value: 1993,
    writable: false, // No permite que se modifique el valor
    configurable: false, // No permite que se elimine la propiedad
    enumerable: false, // No permite que se acceda desde Object.key(fiatDuna)
});

// Métodos para agilizar:
Object.seal(fiatDuna) // Pone todos los configurables en false para que no se puedan eliminar las propiedades
Object.freeze(fiatDuna) // Pone todos los writables y configurables en false para no se puedan eliminar ni modificar las propiedades

// DATO IMPORTANTE
// Luego de usar el método seal o freeze no se podrán agregar nuevas propiedades ni revertir estos métodos. 

