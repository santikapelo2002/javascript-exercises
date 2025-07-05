const repeatString = function(string,number) {
    let contador=0;
    let resultado = "";
    if(number<0){
        return "ERROR"
    }
while(contador!=number){
     contador++;
     resultado+=string;
   
   
}
return resultado;

};


// Do not edit below this line
module.exports = repeatString;
