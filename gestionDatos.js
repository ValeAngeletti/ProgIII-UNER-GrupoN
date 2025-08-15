//1. Configuración Inicial:
const tiendaMusica = [
    { id: 1, producto: "Guitarra Eléctrica", precio: 20000, stock: 10, color: "Negro" },
    { id: 2, producto: "Batería Acústica", precio: 450000, stock: 5, color: "Metálico" },
    { id: 3, producto: "Teclado", precio: 15000, stock: 20, color: "Blanco" },
    { id: 4, producto: "Micrófono Inalámbrico", precio: 7000, stock: 15, color: "Plateado" },
    { id: 5, producto: "Auriculares de Estudio", precio: 12500, stock: 30, color: "Rojo" },
    { id: 6, producto: "Amplificador de Guitarra", precio: 50000, stock: 25, color: "Marrón" },
    { id: 7, producto: "Pedal de Efectos", precio: 10000, stock: 0, color: "Negro" },
    { id: 8, producto: "Cuerdas para Guitarra", precio: 3000, stock: 50, color: "Neutro" },
    { id: 9, producto: "Atril para Partituras", precio: 5000, stock: 40, color: "Metálico" },
    { id: 10, producto: "Soporte para Batería", precio: 120000, stock: 0, color: "Neutro" },
]

//2. Operaciones Básicas y Acceso:
console.log("----- Tienda de Articulos Musicales -----")

console.log("\n ----- LONGITUD DEL ARRAY -----")
console.log("Cantidad de productos en la tienda:", tiendaMusica.length);

console.log("\n ----- ACCEDIENDO A ELEMENTOS -----")
console.log("Segundo producto:", tiendaMusica[1].producto);
console.log("Cuarto producto:", tiendaMusica[3].producto);

//3 Recorrido del Array:
console.log("\n ----- RECORRIENDO EL ARRAY -----")
console.log("-- Recorrido de productos con for...of --");
for (let producto of tiendaMusica) {
    console.log(`Producto: ${producto.producto}, Precio: $${producto.precio}.`);
}

console.log("\n-- Recorrido de productos con forEach() --");
tiendaMusica.forEach(producto => {
    console.log(`Nombre de producto: ${producto.producto}, Precio: $${producto.precio}.`);
});

//4. Manipulación de Arrays:
console.log("\n ----- MANIPULACIÓN DEL ARRAY -----")

// Array original (antes de cambios)
console.log("\nArray inicial antes de las operaciónes:", tiendaMusica);

// 4.1 - Agregar 2 elementos al final con push()
tiendaMusica.push(
    { id: 11, producto: "Metrónomo Digital", precio: 4500, stock: 12, color: "Plateado" },
    { id: 12, producto: "Cable de Audio", precio: 2500, stock: 100, color: "Azul" }
);
console.log("\n-- Después de push():", tiendaMusica.slice(-2));

// 4.2 - Eliminar último elemento con pop()
const elementoEliminadoPop = tiendaMusica.pop();
console.log("\n-- Elemento eliminado con pop():", elementoEliminadoPop);
console.log("\nArray después de pop():", tiendaMusica);

// 4.3 - Agregar 1 elemento al inicio con unshift()
tiendaMusica.unshift({ id: 0, producto: "Púa para Guitarra", precio: 200, stock: 200, color: "Plateado" });
console.log("\n-- Agregando elemento con unshift():", tiendaMusica[0]);
console.log("\nArray despues de unshift():", tiendaMusica);

// 4.4 - Eliminar primer elemento con shift()
const elementoEliminadoShift = tiendaMusica.shift();
console.log("\n-- Elemento eliminado con shift():", elementoEliminadoShift);
console.log("\nArray después de shift():", tiendaMusica);

// 4.5 Crear un nuevo array con filter() que tenga solo elementos con stock > 0.
const productosConStock = tiendaMusica.filter(p => p.stock > 0);
console.log("\n-- Productos en stock > 0:", productosConStock);

// 4.6 Crear un nuevo array con map() que tenga solo los nombres.
const nombres = tiendaMusica.map(p => p.producto);
console.log("\n-- Nombres de los productos:", nombres);

// 4.7 Buscar un producto con find() que tenga un id específico (ej. id:3) e imprimirlo (o mensaje si no existe).
const buscar = tiendaMusica.find(p => p.id === 3);
console.log("\n-- Buscar producto por id \n ID 3:", buscar || "No encontrado");

// Ejemplo con un ID inexistente
const NoEncontrado = tiendaMusica.find(p => p.id === 15);
console.log("\n-- Buscar producto por id \n ID 15:", NoEncontrado || "No encontrado");

// 4.8 Ordenar productos por precio en orden decreciente usando sort()
const productsOrdenados = [...tiendaMusica].sort((a, b) => b.precio - a.precio);

console.log("\n-- Productos ordenados por precio (de mayor a menor)");
console.log(productsOrdenados);

//Array original
console.log("\n-- Array original:");
console.log(tiendaMusica);



