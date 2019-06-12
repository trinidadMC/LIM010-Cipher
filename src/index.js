/*DECLARANDO MIS BOTONES DE MI PRIMERA CARA*/
const primeracara = document.getElementById("primeracara");
const password = document.getElementById("clave");
const primerbutton = document.getElementById("btn1");
const error = document.getElementById("error");
/*DECLARACION DE INTERACCION DE LA PRIMERA MAS ENLACE A LA SIGUIENTE*/
const segundacara = document.getElementById("segundacara");
let contador = 0;
primerbutton.addEventListener("click", () => {
    if (password.value === "LABORATORIA") {
        primeracara.classList.add("hide");
        segundacara.classList.remove("hide");
        console.log("cc");
    }
    else if (contador == 2) {
        error.innerHTML = "intentaste 3 veces ya no puedes entrar a la pagina";
    }
    else {
        contador++
        error.innerHTML = "contraseña incorrecta";
    }
});

/*DECLARANDO MI SEGUNDA CARA Y CAJA DE TEXTO MAS BOTONES CIFRADO Y DESCIFRADO MAS ENLACE A LA SIGUIENTE CARA3*/
const terceracara = document.getElementById("terceracara");
const output = document.getElementById("container");
const textarea1 = document.getElementById("cajamensaje");
const cifradobutton = document.getElementById("btn2");
const descifradobutton = document.getElementById("btn3");
const textarea2 = document.getElementById("cajaderesultado");
cifradobutton.addEventListener("click", () => {
    if (cajamensaje.value === " ") {
        segundacara.classList.add("CARA2 hide");
        terceracara.classList.remove("hide");
        console.log("");
    }
    if (cajamensaje.value === " ") {
        segundacara.classList.add("hide");
        terceracara.classList.remove("hide");
        console.log("");
    }
});
/*DECLARANDO LA TERCERA CARA CON BOTONES DE SALIR Y VOLVER AL INICIO*/
const terminarysalir = document.getElementById("btn4");
const terminaryvolveralinicio = document.getElementById("btn5");
terminarysalir.addEventListener("click", () => {
    if (cajaresultado.value === " ");
    terceracara.classList.add("hide CARA3");
    console.log(" ");
    if (cajaresultado.value===" " );
    terceracara.classList.add("hide CARA3");
    terceracara.classList.remove("CARA1");
});

