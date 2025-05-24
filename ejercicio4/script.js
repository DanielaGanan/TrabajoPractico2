const boton = document.getElementById("boton");
const altura = document.getElementById("altura");
const peso = document.getElementById("peso");

boton.addEventListener("click", () => {

    let imc;
    imc = (peso.value)/(altura.value*altura.value);
    window.alert("Su IMC = " + imc);

    altura.value = "";
    peso.value = "";
})