//1.
//iniate a variable
let a = "I am a strong";

//if a is truthy then output true
if (a) {
    console.log("true")
}
//if a is === to these input values then it prints the desired outcome
else if (a === null) {
    console.log("The null value is falsy");
}
else if (a === false) {
    console.log("The boolean value false is falsy");
}

else if (a === undefined){
    console.log("undefined is falsy");
}
else if (a === 0){
    console.log("The number 0 is falsy (the only falsy number)");
}
else if ( a === ""){
    console.log("The empty string is falsy (the only falsy string)");
}

//2.
//iniate values
let a = 0;
let b = -5;

//use simple if and else if statements using operands to print desired results
if ( (a + b) === 0 ){
    console.log("0 is equal to 0");
}
else if( (a + b) > 100){
    console.log("101 is greater than 100");
}
else if ( (a + b) > 0 ){
    console.log("97 is greater than 0");
}
else if( (a + b) > 100){
    console.log("101 is greater than 100");
}
else if ( (a + b) <= -1000 ){
    console.log("-1000 is a negative number");
}
else if( (a + b) < 0){
    console.log("-5 is a negative number");
}

//3.
//iniate variables
let a = 1;
let b = 2;
//simple and statment: a and b must both be greater than or equal to 5 to be true
if(a && b >= 5){
    console.log("true");
}
//else false
else{
    console.log("false");
}

//4.
//pair and compare
//first iniate values
let param1A = "five"
let param1B = 5
let param2A = "dog"
let param2B = "dawg"

//logical equation: statment is true if either param 1a&1b or param 2a&2b are ===
if((param1A===param1B) || (param2A===param2B)){
    console.log("true");
}
//print result
else{
    console.log("false");
}


