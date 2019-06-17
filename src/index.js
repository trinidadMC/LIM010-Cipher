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
const codigo = document.getElementById("codigo");
const cifradobutton = document.getElementById("btn2");
const descifradobutton = document.getElementById("btn3");
const textarea1 = document.getElementById("cajamensaje");
const textarea2 = document.getElementById("resultado");

cifradobutton.addEventListener("click", () => {
  let resultado = window.cipher.encode(codigo.value, textarea1.value);
  textarea2.value = resultado;
  segundacara.classList.add("hide");
  terceracara.classList.remove("hide");

});
descifradobutton.addEventListener("click", () => {
  let resultado = window.cipher.decode(codigo.value, textarea1.value);
  textarea2.value = resultado;
  segundacara.classList.add("hide");
  terceracara.classList.remove("hide")
});

/*DECLARANDO MI TERCERA CARA CON MIS BOTONES DE FINALIZAR Y VOLVER AL INICIO*/
const finalizarbutton = document.getElementById("btn4");
const returnbutton = document.getElementById("btn5");
const carafinal = document.getElementById("carafinal");
finalizarbutton.addEventListener("click", () => {
  terceracara.classList.add("hide");
  carafinal.classList.remove("hide");
});
returnbutton.addEventListener("click", () => {
  terceracara.classList.add("hide");
  primeracara.classList.remove("hide");
});

