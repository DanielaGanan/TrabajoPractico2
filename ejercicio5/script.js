const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const boton = document.getElementById("boton");
const area = document.getElementById("area");

console.log(a.value);

boton.addEventListener('click', () => {

    let valorA = Number(a.value);
    let valorB = Number(b.value);
    let valorC = Number(c.value);

    if (valorA <= 0 || valorB <= 0 || valorC <= 0) {
        area.innerText = "Valores incorrectos"

    } else {

        console.log(valorA);
        let resultado = ((valorA - valorC) * valorB) / 2 + (valorC * valorB);
        area.innerText = "El área es igual a " + resultado;
    }
})