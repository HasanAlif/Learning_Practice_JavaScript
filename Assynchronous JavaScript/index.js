
console.log("A");

const welcome = function(){
    console.log("B");
    console.log("C");
}

setTimeout(welcome,2000);

console.log("D");







console.log("A");

const random = function(){
    const numOne = 15;
    const numTwo = 5;
    console.log(numOne + numTwo);
}

const welcome2 = function(){
    console.log("B");
    random();
    console.log("D")
}
setTimeout(welcome2,2000);

console.log("C");
