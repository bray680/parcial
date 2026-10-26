"use strict";
/*
nombre: brayan omar batres hernández
materia: programación estructurada
ejercicio integrador: gestión de reservaciones
*/
Object.defineProperty(exports, "__esModule", { value: true });
// crear el arreglo inicial con cuatro reservaciones
const reservaciones = [
    { id: 1, cliente: "pancho", personas: 2, zona: "interior" },
    { id: 2, cliente: "luis", personas: 6, zona: "terraza" },
    { id: 3, cliente: "roberto", personas: 3, zona: "interior" },
    { id: 4, cliente: "mario", personas: 5, zona: "terraza" }
];
console.log("reservaciones iniciales");
console.log(reservaciones);
// 2. registrar nuevas reservaciones
const reservacionnormal = {
    id: 5,
    cliente: "luis",
    personas: 4,
    zona: "interior"
};
reservaciones.push(reservacionnormal);
const reservacionprioritaria = {
    id: 6,
    cliente: "pancho",
    personas: 2,
    zona: "terraza"
};
reservaciones.unshift(reservacionprioritaria);
console.log("lista antes de atender");
console.log(reservaciones);
// 3. funcion tipada para atender reservaciones
function atenderreservacion(lista) {
    const atendida = lista.shift();
    if (atendida !== undefined) {
        console.log("reservacion atendida:", atendida.cliente);
        console.log("cantidad de personas:", atendida.personas);
    }
    else {
        console.log("no hay reservaciones pendientes.");
    }
}
// primera llamada: atender una reservacion
console.log("primera atencion");
atenderreservacion(reservaciones);
// segunda llamada: comprobar una lista vacia
const listavacia = [];
console.log("prueba con lista vacia");
atenderreservacion(listavacia);
// 4. buscar por identificador
const reservacionencontrada = reservaciones.find((reservacion) => reservacion.id === 2);
if (reservacionencontrada !== undefined) {
    console.log("reservacion encontrada");
    console.log(reservacionencontrada);
}
else {
    console.log("no se encontro la reservacion.");
}
// comprobar un identificador que no existe
const reservacioninexistente = reservaciones.find((reservacion) => reservacion.id === 99);
if (reservacioninexistente !== undefined) {
    console.log("reservacion encontrada");
    console.log(reservacioninexistente);
}
else {
    console.log("no existe una reservacion con el id 99.");
}
// 5. filtrar terraza con cinco o mas personas
const cantidadantesdelfiltro = reservaciones.length;
const reservacionesfiltradas = reservaciones.filter((reservacion) => reservacion.zona === "terraza" && reservacion.personas >= 5);
const cantidaddespuesdelfiltro = reservaciones.length;
console.log("reservaciones filtradas");
console.log(reservacionesfiltradas);
if (reservacionesfiltradas.length === 0) {
    console.log("no hay reservaciones que cumplan las condiciones.");
}
// 6. comprobar el estado final
console.log("reservaciones pendientes");
console.log(reservaciones);
console.log("cantidad de reservaciones pendientes:", reservaciones.length);
console.log("cantidad de coincidencias del filtro:", reservacionesfiltradas.length);
console.log("cantidad antes del filtro:", cantidadantesdelfiltro);
console.log("cantidad despues del filtro:", cantidaddespuesdelfiltro);
if (cantidadantesdelfiltro === cantidaddespuesdelfiltro) {
    console.log("el filtro no elimino reservaciones del arreglo original.");
}
else {
    console.log("la cantidad del arreglo original cambio.");
}
//# sourceMappingURL=parcial2.js.map