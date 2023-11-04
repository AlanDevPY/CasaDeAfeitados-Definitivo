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
    Toastify({
      text: "Favor completa los datos",
      duration: 2000,
      // destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      // close: true,
      gravity: "bottom", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "#740000",
      },
       // Callback after click
    }).showToast()
    // alert("Favor completa todos los datos");
  } else {
    registrarServicio(inputServicio.value, moneda, inputDescripcion.value);
    Toastify({
      text: "Servicio Registrado",
      duration: 2000,
      // destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      // close: true,
      gravity: "bottom", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "#117400",
      },
       // Callback after click
    }).showToast();

    // Resetear los campos del formulario
    inputServicio.value = '';
    inputMonto.value = '';
    inputDescripcion.value = '';
  }
});

