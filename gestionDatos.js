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

console.log("Tienda de Articulos Musicales:")
console.log(tiendaMusica);

console.log("\nCantidad de productos en la tienda:", tiendaMusica.length);

console.log("Segundo producto:", tiendaMusica[1].producto);
console.log("Cuarto producto:", tiendaMusica[3].producto);
/**Recorrido del Array:
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