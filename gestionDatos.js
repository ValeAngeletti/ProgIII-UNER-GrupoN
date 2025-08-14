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
    { id: 10, producto: "Soporte para Batería", precio: 120000, stock: 3, color: "Neutro" },
]

console.log("Tienda de Articulos Musicales:")
console.log(tiendaMusica);

console.log("\nCantidad de productos en la tienda:", tiendaMusica.length);

console.log("Segundo producto:", tiendaMusica[1].producto);
console.log("Cuarto producto:", tiendaMusica[3].producto);

// 4.1 - push(): Agregar 2 productos al final
tiendaMusica.push(
    { id: 6, producto: "Amplificador", precio: 50000, stock: 25 },
    { id: 7, producto: "Pedal", precio: 10000, stock: 7 }
);

// 4.2 - pop(): Eliminar el último producto
const eliminadoConPop = tiendaMusica.pop();

// 4.3 - unshift(): Agregar 1 producto al inicio
tiendaMusica.unshift({ id: 0, producto: "Púa", precio: 200, stock: 200 });

// 4.4 - shift(): Eliminar el primer producto
const eliminadoConShift = tiendaMusica.shift();

// 4.5 - filter(): Productos con stock > 0
const conStock = tiendaMusica.filter(p => p.stock > 0);

// 4.6 - map(): Array solo con nombres
const nombres = tiendaMusica.map(p => p.producto);

// 4.7 - find(): Buscar producto por id
const productoId3 = tiendaMusica.find(p => p.id === 3);

// 4.8 - sort(): Ordenar por precio (descendente)
const ordenados = [...tiendaMusica].sort((a, b) => b.precio - a.precio);

// Ver resultados 
console.log("Productos con stock:", conStock);
console.log("Nombres de productos:", nombres);
console.log("Producto con id 3:", productoId3 || "No existe");
console.log("Productos ordenados por precio:", ordenados);