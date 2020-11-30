'use strict'


var x;
var y;
var min;
var max;
var _divisor;

function mcd(x, y){
     min = Math.min(x, y);
     max = min === x ? y : x;
    if(max % min){
        return min;
    }else{
        let mid = Math.floor(max/2);
         _divisor = mid;
        for(let i=mid; i>0; i--){
            if(max/i && min/i){
                _divisor = i;
            }
        }
        return _divisor
        
    }
    
} 
mcd(12, 4);
//console.log(min);
//console.log(max);
console.log(_divisor);




var resultado;

function suma(x, y){
  resultado = x+y;
    return resultado;
}

suma(2, 4);

//console.log(resultado);

