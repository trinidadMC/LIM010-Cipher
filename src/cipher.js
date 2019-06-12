window.cipher = {
  encode: (offset, string) => {
    let codificar = '';
    for (let i = 0; i< string.length; i++) {
      let numeroascii = string[i].charCodeAt();
      if (numeroascii >= 65 && numeroascii <= 90) {
        resolver += String.fromCharCode((parseInt(offset) + numeroascii - 65) % 26 + 65);
      } else {
        codificar += string.charCodeAt();
      }
    }
    return codificar;
  }
};
decode: (offset, string) => {
  let decodificar = '';
  for (let i = 0; i< string.length; i++) {
    let numeroascii = string[i].charCodeAt();
    if ((numeorascii >= 65) && (numeroascii <= 90)) {
      if (numeroascii >= 65 + parseInt(offset) % 26) {
        decodificar += String.fromCharCode((numeroascii - parseInt(offset) % 26 - 65) + 65);
      } else {
        decodificar += String.fromCharCode((numeroascii - parseInt(offset) % 26 + 26));
      }
    } else {
      decodificar += string.charAt();
    }
  }
  return decodificar;
};
createCipherWithOffset: (offset) =>{
  return
  encode: (string) => { cipher.encode(offset,string); };
  decode: (string) => { cipher.encode(offset,string); };
};



