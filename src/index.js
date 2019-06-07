/* Acá va tu código */
 const contraseña= document.getElementById("clave");
 const firtsbutton= document.getElementById("btn1");
 const error= document.getElementById("error");
 const interfaz1= document.getElementById("interfaz1");
 const interfaz2= document.getElementById("interfaz2");
 const interfaz3= document.getElementById("interfaz3");
 let contador= 0;
 const secondbutton= document.getElementById("btn2");
 const thirdbutton= document.getElementById("btn3");
 firtsbutton.addEventListener("click",function(){
     contador++;
if(contraseña.value=="LABORATORIA" ){
  interfaz1.style.display="none";
  interfaz2.className = "show";
console.log("cc");
}
else if(contador === 3){
    error.innerHTML="intentaste 3 veces ya no puedes entrar a la pagina";
}
else{
error.innerHTML ="contraseña incorrrecta";
}});
