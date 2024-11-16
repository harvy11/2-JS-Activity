
let number = parseInt(prompt("Enter a number:"));

let output = '';

if (number % 3 === 0 && number % 5 === 0) {
    output = 'FizzBuzz';
} else if (number % 3 === 0) {
    output = 'Fizz';
} else if (number % 5 === 0) {
    output = 'Buzz';
} else {
    output = number;
}

alert(output);
