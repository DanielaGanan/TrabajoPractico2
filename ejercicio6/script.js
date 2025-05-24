const boton = document.getElementById("boton");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const edad = document.getElementById("edad");
const altura = document.getElementById("altura");
const correo = document.getElementById("correo");
const respuesta = document.getElementById("respuesta");


boton.addEventListener('click', () => {
    let errores = 0;
    let edadValor = Number(edad.value);
    let alturaValor = Number(altura.value);

    if (nombre.value === "" || nombre.value.length > 50 || apellido.value === "" || apellido.value.length > 50) {
        errores++;
    }

    if (edadValor < 0 || edadValor < 18) {
        errores++;
    }

    if (alturaValor < 0 || alturaValor >= 230) {
        errores++;
    }

    if (!correo.value.includes("@")) {
        errores++;
    }


    if (errores === 0) {
        respuesta.style.color = "green";
        respuesta.innerHTML = "Respuestas guardadas";
    } else {
        respuesta.style.color = "red";
        respuesta.innerHTML = "Respuestas equivocada, intente nuevamente";
    }
})