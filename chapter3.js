//exercises

//3.1  - greet2 is called after greet function,  perhaps greet2 call function is inside greet function.

//3.2  - it'll run out memory and throws an error


function factorial(number) {
    if (number === 1 ) {
        return 1
    } else {
        return number * factorial(number - 1)
    }
}


function main(number) {
    console.log(factorial(number))
}


main(10)