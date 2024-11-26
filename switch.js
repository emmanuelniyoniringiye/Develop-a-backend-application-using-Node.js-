function calculator(operation, num1, num2) {
    switch (operation) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        default:
            return "Invalid operation";
    }
}

// Test the function
console.log(calculator('add', 5, 3)); // 8
console.log(calculator('subtract', 10, 4)); // 6
console.log(calculator('multiply', 7, 6)); // 42