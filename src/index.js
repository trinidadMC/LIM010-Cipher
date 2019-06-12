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
const text = document.getElementById("container");
const cifradobutton = document.getElementById("btn2");
const descifradobutton = document.getElementById("btn3");
const textarea2 = document.getElementById("cajaderesultado");
cifradobutton.addEventListener("click", () => {
    let string = document.getElementById("cajamensaje").value;
    let offset = parseInt(document.getElementById("container").value);
    if (cajamensaje.value === "codificar") {
        segundacara.classList.add("hide");
        terceracara.classList.remove("hide");


    } else {
        alert = "incorrecto"
    }
    });

    descifradobutton.addEventListener("click", () => {
        let string = document.getElementById("cajamensaje").Value;
        let offset = parseInt(document.getElementById("container").value);
        if (cajamensaje.value === "decodificar") {
            segundacara.classList.add("hide");
            terceracara.classList.remove("hide");
        } else {
            alert = "incorrecto"
        }

    });



