
const fizzbuzz = (num) => {
    
    if (num%3==0 && num%5==0){
    return "FizzBuzz";
    }
    
    if (num%5==0){
    return "Buzz";    
    }
    
    if (num%3==0){
    return "Fizz"    
    }

    return num
    
}

module.exports = fizzbuzz;


