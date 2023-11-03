import {
    cajaDB,
    borrarItemCaja

} from "./firebase.js";

window.addEventListener('DOMContentLoaded', async () => {

    let tBody = document.getElementById('tBody')
    let contador = 1

    cajaDB((querySnapshot) => {
        let tr = ''
        let cajas = []



        querySnapshot.forEach((doc) => {
            let caja = doc.data()
            cajas.push({ ...caja, id: doc.id });
        });

        // cajas.sort((a, b) => a.ticket.localeCompare(b.ticket));

        cajas.forEach((caja) => {
            tr += `
            <tr>
            <td>${contador++}</td>
            <td>${caja.servicio}</td>
            <td>${caja.fecha}</td>
            <td>${caja.moneda}</td>
            <td class="text-center align-middle" style="max-height: 60px;height: 60px;">
                <a class="btn btnMaterial btn-flat accent btnNoBorders checkboxHover" role="button" style="margin-left: 5px;">
                <i data-id="${caja.id}" class="fas fa-trash btnNoBorders" style="color: #DC3545;"></i>
                </a>
            </td>
        </tr>
            `
        })
        var sumaDeMontos = 0;

        for (let i = 0; i < cajas.length; i++) {
            sumaDeMontos += parseFloat(cajas[i].moneda);
        }

        let totalCaja = document.getElementById('totalCaja')
        totalCaja.textContent = "Total en caja "+sumaDeMontos.toFixed(3)



        tBody.innerHTML = tr;
        const btnDelet = tBody.querySelectorAll(".fas");

        // Agregar un evento de clic a cada botón de borrado
        btnDelet.forEach((btn) => {
            btn.addEventListener("click", (event) => {
                // Llamar a la función deletTask con el ID de la tarea asociado al botón
                borrarItemCaja(event.target.dataset.id);
                Toastify({
                    text: "Servicio Eliminado",
                    duration: 800,
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
            });
        });

    })
})