const { tiendaMusica } = require("./gestionDatos");

//Crear un nuevo array con filter() que tenga solo elementos con stock > 0.
const productosConStock = tiendaMusica.filter(p => p.stock > 0);
console.log("\nProductos en stock > 0:", productosConStock);

// Crear un nuevo array con map() que tenga solo los nombres.
const nombres = tiendaMusica.map(p => p.producto);
console.log("\nNombres de los productos:", nombres);

// Buscar un producto con find() que tenga un id específico (ej. id:3) e imprimirlo (o mensaje si no existe).
const buscar = tiendaMusica.find(p => p.id === 3);
console.log("\nBuscar producto por id \n ID 3:", buscar || "No encontrado");

//Ejemplo con un ID inexistente
const NoEncontrado = tiendaMusica.find(p => p.id === 15);
console.log("\nBuscar producto por id \n ID 15:", NoEncontrado || "No encontrado");