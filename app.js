const fs = require("fs/promises");

const API_URL = "https://fakestoreapi.com/products";

async function getAllProducts() {
  try {
    const respuesta = await fetch(API_URL);
    const productos = await respuesta.json();

    console.log("Productos de la tienda:");

    productos.forEach((producto, index) => {
      console.log(`${index + 1}. ${producto.title} - $${producto.price}`);
    });

  } catch (error) {
    console.error("Error al obtener los productos:", error);
  }
}

getAllProducts();

//Recuperar la información de un número limitado de productos
//Persistir en archivo local JSON
 
async function getProductosLimitados(limit = 5) {
  
  try {
    const respuesta = await fetch(`${API_URL}?limit=${limit}`);
    const productos = await respuesta.json();
    console.log(`Recuperados ${productos.length} productos (limit=${limit})`);
    await fs.mkdir("data", { recursive: true });
    await fs.writeFile("data/products.json", JSON.stringify(productos, null, 2));
    console.log("Guardados en data/products.json");
    productos.forEach((p, i) => {
      console.log(`${i + 1}. [${p.id}] ${p.title} - $${p.price}`);
    });
  } catch (error) {
    console.error("Error al obtener productos limitados:", error);
  }
}

// Si no se pasa argumento nos muestra todos los datos
// Si se pasa numero nos trae esa cantidad y guarda en el JSON

const arg = process.argv[2];
if (!arg) {
  getAllProducts();
} else {
  const limit = Number(arg);
  if (Number.isNaN(limit) || limit <= 0) {
    console.error("Se debe pasar un numero valido. Ejemplo: node app.js 5");
  } else {
    getProductosLimitados(limit);
  }
}