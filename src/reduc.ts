const numbers = [1, 2, 3, 4, 5];

let total=0;

for(const number of numbers) {
    total += number;
}
total; // 15

numbers.reduce((currentValue, n) => currentValue + n, 0); // 15, reduce is a method that reduces an array to a single value by applying a function to each element in the array, starting with an initial value (0 in this case). carrying forward the result of the previous operation to the next element.
//currentValue is the accumulated value, n is the current element in the array, and 0 is the initial value.