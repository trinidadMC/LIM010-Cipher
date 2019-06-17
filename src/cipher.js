window.cipher = {
  encode: (offset, string) => {
    let codificar = '';
    for (let i = 0; i < string.length; i++) {
      let numeroascii = string.charCodeAt(i);
      if (numeroascii >= 65 && numeroascii <= 90) {
        codificar += String.fromCharCode(numeroascii - 65 + parseInt(offset) % 26 + 65);
      } else if (numeroascii === 32) {
        codificar += " ";
      }
    } return codificar;
  },
decode: (offset, string) => {
  let decodificar = '';
  for (let i = 0; i < string.length; i++) {
    let numeroascii = string.charCodeAt(i);
    if (numeroascii >= 65 && numeroascii <= 90) {
      decodificar += String.fromCharCode((numeroascii + 65 - parseInt(offset)) % 26 + 65);
    } else if (numeroascii === 32) {
      decodificar += " ";
    }
  }
  return decodificar;
}
};




