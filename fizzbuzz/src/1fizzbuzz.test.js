const fizzbuzz = require("./1fizzbuzz")

test ('should retorn Fizz param is 3 div', () => {
    //expect
    let result = fizzbuzz(3)
    expect (result).toBe('Fizz')
    })

test ('should retorn Buzz param is 5 div', () => {
    let result = fizzbuzz(5)
    expect (result).toBe('Buzz')
    })

test ('should retorn FizzBuzz param is 3 && 5 div', () => {
    let result = fizzbuzz(15)
    expect (result).toBe('FizzBuzz')
    })

test ('should retorn num param is not 3 && 5 div', () => {
    let result = fizzbuzz(2)
    expect (result).toBe(2)
    })


