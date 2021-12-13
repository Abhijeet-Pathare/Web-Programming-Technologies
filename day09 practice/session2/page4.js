// collection


// array: collection of objects (number/string/boolean etc)

function function1(){
    const numbers =[10,20,30,40,50]

    
    // adding a new value to an array
    numbers.push(60)
    numbers.push(70)
    numbers.push(80)
    console.log(numbers)

    // remove the last value
    numbers.pop()
    numbers.pop()
    console.log(numbers)

    // remove the in between values
  // delete 1 item from 1st index from numbers collection
  // numbers.splice(1, 1)
  // console.log(numbers)
  numbers.splice(1,2)
  console.log(numbers)

}
function1()

function function2(){
    // array of strings
    const countries = [`india`,`usa`,`canada`,`germany`]
    console.log(countries)

}
function2()

function function3(){
    const numbers = [10,20,30,`india`,40,90,`usa`,60.7]
    console.log(numbers)
}

function3()