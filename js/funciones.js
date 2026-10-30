
function mostrarSaludo() {
    console.log("Bienvenido a GARDEN MARTIN");
}

function validarFormulario(evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const servicio = document.getElementById("servicio").value;
    const mensaje = document.getElementById("mensaje").value;
    const respuesta = document.getElementById("respuesta-formulario");

    if (
        nombre.trim() === "" ||
        email.trim() === "" ||
        servicio === "" ||
        mensaje.trim() === ""
    ) {
        respuesta.textContent = "Por favor, completa todos los campos.";
        return;
    }

    respuesta.textContent =
        "¡Gracias, " + nombre +
        "! Has solicitado información sobre " + servicio +
        ". Recuerda que esta demostración no envía correos reales.";
}

mostrarSaludo();

const formulario = document.getElementById("formulario-contacto");

if (formulario) {
    formulario.addEventListener("submit", validarFormulario);
}
