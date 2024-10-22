let numbers = [5, 3, 8, 1, 2];

//add a number
function addNumber(array, number) {
    array.push(number);
    console.log(`After adding ${number}:`, array);
}

// remove  first occurrence 
function removeNumber(array, number) {
    const index = array.indexOf(number);
    if (index !== -1) {
        array.splice(index, 1);
        console.log(`After removing ${number}:`, array);
    } else {
        console.log(`${number} not found in array.`);
    }
}

// sort the array in ascending order
function sortNumbers(array) {
    const sortedArray = [...array].sort((a, b) => a - b);  // Copy the array and sort
    console.log('Sorted array:', sortedArray);
    return sortedArray;
}

// calculate the sum 
function calculateSum(array) {
    const sum = array.reduce((acc, num) => acc + num, 0);
    console.log('Sum of numbers:', sum);
    return sum;
}

// calculate the average
function calculateAverage(array) {
    const sum = calculateSum(array);
    const average = sum / array.length;
    console.log('Average of numbers:', average);
    return average;
}


console.log('Initial array:', numbers);

// Add num
addNumber(numbers, 4);

// Remove num
removeNumber(numbers, 3);

// Sorting
sortNumbers(numbers);

// Calculate the sum 
calculateSum(numbers);

// Calculate the average
calculateAverage(numbers);
