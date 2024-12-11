
const productos = [
    { nombre: 'Manzanas', precio: 15, categoria: 'Frutas' },
    { nombre: 'Leche', precio: 25, categoria: 'Lácteos' },
    { nombre: 'Pan', precio: 10, categoria: 'Panadería' },
    { nombre: 'Carne', precio: 80, categoria: 'Carnes' },
    { nombre: 'Queso', precio: 30, categoria: 'Lácteos' },
    { nombre: 'Galletas', precio: 12, categoria: 'Panadería' }
];

const productosPorCategoria = (categoria) => {
    return productos.filter(producto => producto.categoria === categoria);
};

const productoMasCaro = () => {
    return productos.reduce((masCaro, producto) => producto.precio > masCaro.precio ? producto : masCaro, productos[0]);
};

const productosEnOferta = () => {
    return productos.map(producto => ({
        ...producto,
        precio: producto.precio * 0.8
    }));
};
