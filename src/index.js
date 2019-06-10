/*DECLARANDO MIS BOTONES DE MI PRIMERA CARA*/
const primeracara = document.getElementById("primeracara");
const password = document.getElementById("clave");
const primerbutton = document.getElementById("btn1");
const error = document.getElementById("error");
/*DECLARACION DE MI SEGUNDACARA CON INTERACCION A LA PRIMERA */
const segundacara = document.getElementById("segundacara")
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
/*DECLARANDO MI TERCERA CARA Y BOTONES*/
const terceracara = document.getElementById("terceracara");
segundobutton = document.getElementById("btn2");
tercerbutton = document.getElementById("btn3");



