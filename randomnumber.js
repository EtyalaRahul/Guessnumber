let a = Math.random();
let b;
do {
    b = prompt("Enter your number :");
    if(a > b){
        console.log("Your number is greater than the random number");
    }
    else if(a < b){
        console.log("Your number is less than the random number ");
    }
} while(a !== b)
console.log("Your number is equal to the random number");
