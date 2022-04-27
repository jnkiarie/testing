function addition(a,b){
    return a+b;
}

function substraction(a,b){
    return a-b;
}

console.log("The Sum is", addition(1,2));

console.log("The Difference is", substraction(3,2));

module.exports = {addition, substraction};