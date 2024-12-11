
let listaDeCompras = [];

const agregarProducto = (producto) => {
  if (!listaDeCompras.includes(producto)) {
    listaDeCompras.push(producto);
    console.log(`Producto "${producto}" agregado a la lista.`);
  } else {
    console.log(`El producto "${producto}" ya está en la lista.`);
  }
};

const eliminarProducto = (producto) => {
  const indice = listaDeCompras.indexOf(producto);
  if (indice !== -1) {
    listaDeCompras.splice(indice, 1);
    console.log(`Producto "${producto}" eliminado de la lista.`);
  } else {
    console.log(`El producto "${producto}" no se encontró en la lista.`);
  }
};

const mostrarLista = () => {
  if (listaDeCompras.length === 0) {
    console.log("La lista de compras está vacía.");
  } else {
    console.log("Lista de compras:");
    listaDeCompras.forEach((producto, index) => {
      console.log(`${index + 1}. ${producto}`);
    });
  }
};
