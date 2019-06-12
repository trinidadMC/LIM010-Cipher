 /*window.cipher = 
  encode:(offset, string) => {}
 let solved = "";

   for(let i=0;i<string.length;i++)
   const asiiNum = string[1].charCodeAt();
   if(asiiNum >= 65 && asciiNum <= 90){
     solved+= string.fromCharCode(asciiNum + offset)
   };
 return solved;

  decode: (offset, string) => {
  };
*/
encode: (offset, string) => {
  let solved = '';
  const stringArr = string.split('');
  stringArr.forEach((letra) => {
    const asciiNum = letra.charCodeAt();
    if (asciiNum >= 65 && asciiNum <= 90) {
      const code = (asciiNum + 65 - parseInt(offset)) % 26 + 65;
      solved += String.fromCharCode(code);
    } else if (asciiNum >= 97 && asciiNum <= 122) {
      const code = (asciiNum + 97 + parseInt(offset)) % 26 + 97;
      solved += String.fromCharCode(code);
    } else if (asciiNum === 32) {
      solved += ' ';
    }
  });
  return solved;
}
decode: (offset, string) => {
  let solved = '';
  const stringArr = string.split('');
  stringArr.forEach((letra) => {
    const asciiNum = letra.charCodeAt();
    if (asciiNum >= 65 && asciiNum <= 90) {
      const code = (asciiNum + 65 - parseInt(offset)) % 26 + 65;
      solved += String.fromCharCode(code);
    } else if (asciiNum >= 97 && asciiNum <= 122) {
      const code = (asciiNum + 97 + parseInt(offset)) % 26 + 97;
      solved += String.fromCharCode(code);
    } else if (asciiNum === 32) {
      solved += ' ';
    }
  });
  return solved;
}
 
 
