const sumAll = function(num1,num2) {

let resultado = 0;

if(isNaN(num1)|| isNaN(num2)){return "ERROR";}

if(!Number.isInteger(num1)|| !Number.isInteger(num2)){return "ERROR";}

if(num1<0 || num2<0){return "ERROR";}

if(num1<num2){
    for(let i=num1;i<=num2;i++){
        resultado+=i;
    }
}else{
     for(let i=num2;i<=num1;i++){
        resultado+=i;
    }
}
return resultado;
};

// Do not edit below this line
module.exports = sumAll;
