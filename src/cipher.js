window.cipher = {
  encode: (offset, string) => {
    let codificar = '';
    for (let i = 0; i < string.length; i++)
     {
      let numeroascii = string.charCodeAt(i);
      if (numeroascii >= 65 && numeroascii <= 90) {
        codificar += String.fromCharCode((parseInt(offset) + numeroascii - 65) % 26 + 65);
      } else if ( numeroascii===32) {
        codificar+= " ";
      } else {
        codificar += numeroascii;
      }
    }
    return codificar;
  },
  decode: (offset, string) => {
    let decodificar = '';
    for (let i = 0; i < string.length; i++){
      let numeroascii=string[i].charCodeAt();
      if(numeroascii>=65 && numeroascii<=90){
        decodificar += String.fromCharCode((numeroascii - parseInt(offset) +65) % 26 + 65);
      } else if ( numeroascii===32) {
      decodificar+= " ";
      }else{
        decodificar += string.numeroascii;
      }
    }
    return decodificar;
  }
};




