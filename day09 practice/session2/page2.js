// function
// - block of statements which can be called multiple times
// - fundamental unit to reuse the code

// named function

function canVote(age){
    if (age >= 18)
    {
        console.log(`this person can vote`)
    }
    else{
        console.log(`this person can not vote`)
    }
}

const age1 = 10
canVote(age1)

const age2=18
canVote(age2)

// unnamed function
// anonymous function

const sayHello1 = function (user){
    console.log(`hello ${user}`)
}
// arrow function
// big fat arrow function
// unnamed function
// anonymous function

const sayHello2 = (user) =>{
    console.log(`hello ${user}`)
}

sayHello1(`Nishi`)
sayHello2(`Abhijeet`)

