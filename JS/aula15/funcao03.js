/*let val = function(x){
    return x*2 
}
console.log(val(6))*/ 

/*criar uma função fatorial;*/

function fatorial(num){
    let fat = 1
    for(var c = num; c > 1; c-- ){
        fat*=c
    }
    return fat
}
console.log(fatorial(5))