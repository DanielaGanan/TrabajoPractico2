const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const boton = document.getElementById("boton");
const area = document.getElementById("area");

console.log(a.value);

let errores = 0;

boton.addEventListener('click', () => {

    console.log(nombre.value);
    console.log(nombre.value.length);

    if (nombre.value === "" || nombre.value.length > 50) {
        errores++;
    }
})