const palindromes = function (string) {
   let stringNuevo = string.split("").slice().reverse().join("").toLowerCase().trim();
   let stringFinal = string.toLowerCase().trim();
  
if(stringFinal==stringNuevo){
    return true;
}else{
    return false;
}
};

// Do not edit below this line
module.exports = palindromes;
