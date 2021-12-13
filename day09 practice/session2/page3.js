const num =100
console.log(`num = ${num},type of num = ${typeof num}`)

// get the value of num to num2
let num2 = num
console.log(`num2 = ${num2}, type of num2 = ${typeof num2}`)

num2 = 500
console.log(`num = ${num}, type of num = ${typeof num}`)
console.log(`num2 = ${num2}, type of num2 = ${typeof num2}`)

// function  declaration

function function1(){
    console.log(`inside fucntion 1`)
}

// function call
// function1()

//console.log(`function1 = ${function1},type of function1 = ${typeof function1}`)
console.log(`function1 = ${function1}, type of function1 = ${typeof function1}`)

// function alias
// another name given to existing function
// both myFunction and function1 will refer the same function
 const myFucntion = function1

