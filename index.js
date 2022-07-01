function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a / b;
}
function increment(n){
    n++;
    return n;
}
function decrement(n){
    n--;
    return n;
}
function makeInt(n){
    if(parseInt(n, 10)===NaN){
        return undefined;
    }
    else{
        return parseInt(n,10);
    }
}
function preserveDecimal(n){
   if(parseFloat(n)===NaN){
    return undefined;
   }
   else{
    return parseFloat(n);
}
}