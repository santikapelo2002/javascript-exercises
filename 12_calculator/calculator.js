const add = function(num1,num2) {
	return Math.floor(num1+num2);
};

const subtract = function(num1,num2) {
 
  
  
		return Math.floor(num1-num2);

};

const sum = function(arr) {
	return arr.reduce((acc,current)=>{return acc+=current},0)
};

const multiply = function(arr) {
			return arr.reduce((acc,current)=>{return acc*=current},1)


};

const power = function(base,exponente) {
	return Math.floor(base**exponente);
};

const factorial = function(num) {
  if(num<0) return 'Error';
  
  if(num===0)return 1;
  
  let resultado=1;
	for(let i=num;i>0;i--){
    resultado*=i;
  }
  return resultado;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
