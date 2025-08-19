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
    console.error("❌ Error al obtener los productos:", error);
  }
}

getAllProducts();
