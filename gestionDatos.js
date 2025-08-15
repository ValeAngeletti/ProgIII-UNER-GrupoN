
//1. Configuración Inicial:
const tiendaMusica = [
    { id: 1, producto: "Guitarra Eléctrica", precio: 20000, stock: 10, color: "Negro" },
    { id: 2, producto: "Batería Acústica", precio: 450000, stock: 5, color: "Metálico" },
    { id: 3, producto: "Teclado", precio: 15000, stock: 20, color: "Blanco" },
    { id: 4, producto: "Micrófono Inalámbrico", precio: 7000, stock: 15, color: "Plateado" },
    { id: 5, producto: "Auriculares de Estudio", precio: 12500, stock: 30, color: "Rojo" },
    { id: 6, producto: "Amplificador de Guitarra", precio: 50000, stock: 25, color: "Marrón" },
    { id: 7, producto: "Pedal de Efectos", precio: 10000, stock: 7, color: "Negro" },
    { id: 8, producto: "Cuerdas para Guitarra", precio: 3000, stock: 50, color: "Neutro" },
    { id: 9, producto: "Atril para Partituras", precio: 5000, stock: 40, color: "Metálico" },
    { id: 10,producto: "Soporte para Batería", precio: 120000, stock: 3, color: "Neutro" },
]
//2. Operaciones Básicas y Acceso:
console.log("Tienda de Articulos Musicales:")
console.log(tiendaMusica);

console.log("\nCantidad de productos en la tienda:", tiendaMusica.length);

console.log("Segundo producto:", tiendaMusica[1].producto);
console.log("Cuarto producto:", tiendaMusica[3].producto);

//3 Recorrido del Array:
/**
1. Recorrer el array productos utilizando un bucle for...of e imprimir el nombre y el precio de cada
elemento.
2. Recorre el array productos utilizando el método forEach() e imprimir la misma información que en el
punto anterior, pero agregando una frase descriptiva (ej. "Producto: [nombre], Precio: [precio]").**/ 

console.log("🟢 Recorrido de productos con for...of para mostrar Nombre del producto y su precio: ");
for (let producto of tiendaMusica ){
    console.log(`Producto: ${producto.producto}, Precio: ${producto.precio}`);
}

console.log("🔵 Recorrido de productos con forEach() para mostrar Nombre del producto y su precio: ");
tiendaMusica.forEach(producto => {
    console.log(`Nombre de producto: ${producto.producto}, Precio: ${producto.precio}`);
});
//4. Manipulación de Arrays:
// 4. Manipulación básica de arrays (solo operaciones críticas)
console.log("\n--- Punto 4: Manipulación de Arrays ---");

// Array original (antes de cambios)
console.log("Array inicial:", tiendaMusica);

// 4.1 - Agregar 2 elementos al final con push()
tiendaMusica.push(
    { id: 11, producto: "Metrónomo Digital", precio: 4500, stock: 12 },
    { id: 12, producto: "Cable de Audio", precio: 2500, stock: 100 }
);
console.log("\n4.1 - Después de push():", tiendaMusica.slice(-2)); // Muestra los nuevos elementos

// 4.2 - Eliminar último elemento con pop()
const elementoEliminadoPop = tiendaMusica.pop();
console.log("\n4.2 - Elemento eliminado con pop():", elementoEliminadoPop);
console.log("Array después de pop():", tiendaMusica);

// 4.3 - Agregar 1 elemento al inicio con unshift()
tiendaMusica.unshift({ id: 0, producto: "Púa para Guitarra", precio: 200, stock: 200 });
console.log("\n4.3 - Después de unshift():", tiendaMusica[0]); // Muestra el nuevo primer elemento
console.log("Array completo:", tiendaMusica);

// 4.4 - Eliminar primer elemento con shift()
const elementoEliminadoShift = tiendaMusica.shift();
console.log("\n4.4 - Elemento eliminado con shift():", elementoEliminadoShift);
console.log("Array después de shift():", tiendaMusica);

// Parte 5 – Métodos de búsqueda y filtrado

// 5.1 Crear un nuevo array con filter() que tenga solo elementos con stock > 0.
const productosConStock = tiendaMusica.filter(p => p.stock > 0);
console.log("\nProductos en stock > 0:", productosConStock);

// 5.2 Crear un nuevo array con map() que tenga solo los nombres.
const nombres = tiendaMusica.map(p => p.producto);
console.log("\nNombres de los productos:", nombres);

// 5.3 Buscar un producto con find() que tenga un id específico (ej. id:3) e imprimirlo (o mensaje si no existe).
const buscar = tiendaMusica.find(p => p.id === 3);
console.log("\nBuscar producto por id \n ID 3:", buscar || "No encontrado");

// 5.4 Ejemplo con un ID inexistente
const NoEncontrado = tiendaMusica.find(p => p.id === 15);
console.log("\nBuscar producto por id \n ID 15:", NoEncontrado || "No encontrado");

// 6. Ordenamiento (Integrante 6)
const productsOrdenados = [...tiendaMusica].sort((a, b) => b.precio - a.precio);

console.log("\n--- Productos ordenados por precio (de mayor a menor) ---");
console.log(productsOrdenados);

// Verificación: Array original no modificado
console.log("\nArray original:");
console.log(tiendaMusica);



