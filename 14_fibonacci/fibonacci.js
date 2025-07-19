const fibonacci = function(num) {
    num=parseInt(num);
    if(isNaN(num)){return 'Error';}
    if(num==0)return parseInt(num);
    if(num<0)return "OOPS";
   

    let array=[];
    let a=1;
    let b=1;
    array.push(a,b);
    for(let i=0;i<=num-2;i++){
        let resultado = a+b;
        array.push(resultado);
        b=a;
        a=resultado;
    }
    return array[num-1];

};

// Do not edit below this line
module.exports = fibonacci;
