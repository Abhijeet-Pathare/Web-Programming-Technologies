function function1() {
    // array of numbers
    const numbers = [1, 2, 3, 4, 5]
  
    // traditional for loop
    for (let index = 0; index < numbers.length; index++) {
      console.log(`value at ${index} = ${numbers[index]}`)
    }
  
    console.log()
  
    // for each loop
    for (const value of numbers) {
      console.log(`value = ${value}`)
    }
  
    console.log()
  
    // for each lop
    // forEach runs a for loop from first index to the last index and
    // calls the arrow function for every iteration with the
    // value at the iteration
    // numbers.forEach(function (value) {
    //   console.log(`value = ${value}`)
    // })
  
    numbers.forEach((value) => {
      console.log(`value = ${value}`)
    })
  }

  //function1()
  // get square of every item from numbers
  // and store  them into an array named squares
  // using map function
  function function2(){
      const numbers = [1,2,3,4,5,6]

      const squares = numbers.map((value)=>{
          return value*value
      })

      const cubes = numbers.map((value)=>{
          return value*value*value
      })
      console.log(`numbers=${numbers}`)
      console.log(`squares=${squares}`)
      console.log(`cubes=${cubes}`)
  }

 // function2()

 function function3(){
     const numbers = [1,2,3,4,5]

     function processArrayFunc(func){
         for(let index = 0;index<numbers.length;index++){
             func(numbers[index])
         }
     }
     processArrayFunc((value)=>{
         console.log(`value = ${value}`)
     })
 }

 //function3()

 function function4() {
    // collection of string values
    const array1 = ['10.30', '40.59', '20', '30']
  
    // convert the string values to number values
    const numbers = array1.map((value) => {
      return parseFloat(value)
    })
  
    console.log(array1)
    console.log(numbers)
  }
  
 // function4()

 function function5(){

    const numbers = [1,2,3,4,5,6,7,8,9,10]

    const evenNumbers = []
    for(const value of numbers){
        if(value%2==0){
            evenNumbers.push(value)
        }
    }
    console.log(`numbers = ${numbers}`)
    console.log(`even numbers = ${evenNumbers}`)
 }
 //function5()

 function function6(){

    const numbers=[1,2,3,4,5,6,7,8,9,10]

    const evenNumbers = numbers.filter((value)=>{
        return value%2==0
    })

    const oddNumbers = numbers.filter((value) =>{
        return value % 2 !=0
    })
    console.log(`numbers = ${numbers}`)
    console.log(`evenNumbers = ${evenNumbers}`)
    console.log(`oddNumbers = ${oddNumbers}`)
 }
 function6()