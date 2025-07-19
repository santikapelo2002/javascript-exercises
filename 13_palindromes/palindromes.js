const palindromes = function (string) {
   let stringNuevo = string.split("").slice().reverse().join("").toLowerCase().replace(/[.,\s?!]/g, "");
   let stringFinal = string.toLowerCase().replace(/[.,\s?!]/g, "");
  
return stringFinal==stringNuevo

};
/*
Para eliminar espacios en blanco entre palabras y caracteres no queridos como la coma usaremos el método
.replace()

¿Qué significa [.,\s?]?
[ ] → conjunto de caracteres

. → punto

, → coma

\s → espacio en blanco (whitespace)

? → signo de interrogación


*/
// Do not edit below this line
module.exports = palindromes;
