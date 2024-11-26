function sumArray(numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

// Test the function
console.log(sumArray([1, 2, 3, 4, 5])); // 15
console.log(sumArray([10, 20, 30])); // 60
