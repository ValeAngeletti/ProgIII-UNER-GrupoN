const fs = require("fs/promises");

const API_URL = "https://fakestoreapi.com/products";

async function getAllProducts() {
    try {
        const respuesta = await fetch(API_URL);
        const productos = await respuesta.json();

        console.log("\nProductos de la tienda:");

        productos.forEach((producto, index) => {
            console.log(`${index + 1}. ${producto.title} - $${producto.price}`);
        });

    } catch (error) {
        console.error("Error al obtener los productos:", error);
    }
}

//Recuperar la información de un número limitado de productos
//Persistir en archivo local JSON

async function getProductosLimitados(limit) {

    try {
        const respuesta = await fetch(`${API_URL}?limit=${limit}`);
        const productos = await respuesta.json();
        console.log(`\nRecuperados ${productos.length} productos`);
        await fs.mkdir("data", { recursive: true });
        await fs.writeFile("data/products.json", JSON.stringify(productos, null, 2));
        console.log("\nProductos guardados en data/products.json");
        productos.forEach((p, i) => {
            console.log(`${i + 1}. [${p.id}] ${p.title} - $${p.price}`);
        });
    } catch (error) {
        console.error("Error al obtener productos limitados:", error);
    }
}

// Buscar productos por ID ----
async function getProductoPorId(id) {
    try {
        if (Number.isNaN(id) || id <= 0) {
            throw new Error("\nEl ID debe ser un número mayor a 0");
        }
        const respuesta = await fetch(`${API_URL}/${id}`);
        if (!respuesta.ok) {
            throw new Error(`No hay un producto relacionado al el id ${id}`);
        }

        const producto = await respuesta.json();
        console.log(`\n-- Producto encontrado con exito - ID = ${id}: --`)
        console.log(`\nNombre del producto: ${producto.title}.`)
        console.log(`Precio del producto: $${producto.price}.`)
        console.log(`Descripción del producto: ${producto.description}.`)
        console.log(`Categoría del producto: ${producto.category}.`)
    } catch (error) {
        console.log("\nError al obtener el producto: ", error.message);
    }

}

// Si no se pasa argumento nos muestra todos los datos
// Si se pasa numero nos trae esa cantidad y guarda en el JSON

const entradaDeUsuario = require("readline");

console.log("\n---- MENÚ DE ACCIONES ----")
console.log("1. Mostrar todos los productos")
console.log("2. Mostrar un número limitado de productos")
console.log("3. Agregar un nuevo producto")
console.log("4. Buscar producto por ID")
console.log("5. Eliminar un producto")
console.log("6. Modificar un producto")

const entrada = entradaDeUsuario.createInterface({
    input: process.stdin,
    output: process.stdout
})

entrada.question("Ingrese una opción: ", (respuesta) => {
    const rta = Number(respuesta);

    if (Number.isNaN(rta) || rta <= 0) {
        console.error("\nOpción inválida. Intente nuevamente.");
        entrada.close();
        console.log("\n---- Saliendo ... ----");
    } else {
        switch (rta) {
            case 1:
                console.log("\n-- MOSTRANDO TODOS LOS PRODUCTOS --");
                getAllProducts().then(() => {
                    entrada.close();
                    console.log("\n---- Saliendo ... ----");
                });
                break;
            case 2:
                console.log("\n-- MOSTRANDO UN NÚMERO LIMITADO DE PRODUCTOS --");
                entrada.question("\nIngrese el número de productos a mostrar: ", (num) => {
                    getProductosLimitados(num).then(() => {
                        entrada.close();
                        console.log("\n---- Saliendo ... ----");
                    })
                });
                break;
            case 3:
                console.log("\n-- AGREGAR UN NUEVO PRODUCTO --");
                entrada.close();
                console.log("\n---- Saliendo ... ----");
                break;
            case 4:
                console.log("\n-- BUSCAR PRODUCTO POR ID --");
                entrada.question("\nIngrese el ID del producto a buscar: ", (id) => {
                    getProductoPorId(id).then(() => {
                        entrada.close();
                        console.log("\n---- Saliendo ... ----");
                    })
                })
                break;
            case 5:
                console.log("\n-- ELIMINAR UN PRODUCTO --");
                entrada.close();
                console.log("\n---- Saliendo ... ----");
                break;
            case 6:
                console.log("\n-- MODIFICAR UN PRODUCTO --");
                entrada.close();
                console.log("\n---- Saliendo ... ----");
                break;
            default:
                console.log("\n-- Opción inválida --")
                entrada.close();
                console.log("\n---- Saliendo ... ----");
        }
    }
})

