// viajes.js
const destinos = [];

const registrarDestino = (destino, fecha, transporte) => {
  const nuevoViaje = {
    destino, // Destructuring
    fecha,
    transporte,
    costo: calcularCosto(destino, transporte)
  };
  destinos.push(nuevoViaje);
};

const calcularCosto = (destino, transporte) => {
  // ... (lógica de cálculo de costo)
};

const mostrarItinerario = () => {
  destinos.forEach(viaje => {
    const { destino, fecha, transporte, costo } = viaje;
    console.log(`Destino: ${destino}`);
    console.log(`Fecha: ${fecha}`);
    console.log(`Transporte: ${transporte}`);
    console.log(`Costo: $${costo}`);
    console.log('---------------------------');
  });
};

export { registrarDestino, calcularCosto, mostrarItinerario };