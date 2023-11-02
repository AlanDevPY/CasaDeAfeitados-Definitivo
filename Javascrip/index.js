import {
  registrarServicio
} from "./firebase.js";

// funcion de crear un reloj
function actulizarFecha() {
  let fechaHoy = document.getElementById('fechaHoy')
  let options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true, // Usar formato de 24 horas
  };
  let fecha = new Date().toLocaleString("es-ES", options);
  fechaHoy.textContent = fecha
}
setInterval(actulizarFecha, 1000)

// Agregar datos a la base de datos

let btnRegistrar = document.getElementById('btnRegistrar');
btnRegistrar.addEventListener('click', (e) => {
  e.preventDefault();
  let inputServicio = document.getElementById('inputServicio');
  let inputMonto = document.getElementById('inputMonto');
  let inputDescripcion = document.getElementById('inputDescripcion');

  let montoNumerico = parseFloat(inputMonto.value);

  const moneda = montoNumerico.toLocaleString('es-ES', {
    useGrouping: true,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });

  if (inputServicio.value === '' || inputMonto.value === '') {
    alert("Favor completa todos los datos");
  } else {
    registrarServicio(inputServicio.value, moneda, inputDescripcion.value);

    // Resetear los campos del formulario
    inputServicio.value = '';
    inputMonto.value = '';
    inputDescripcion.value = '';
  }
});

