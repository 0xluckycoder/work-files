
// functions that create new functions
function greaterThan(n) {
    return m => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

// function that change other functions
function noisy(f) {
    return (...args) => {
        console.log("calling with", args);
        let result = f(...args);
        console.log("called with", args, " returned", result);
        return result;
    }
}
noisy(Math.min)(3, 2, 1);


// ["A", "B"].forEach(l => console.log(l));

const array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
console.log(map1);


reduce
const array1 = [1, 2, 3, 4, 5];
const initialValue = 0;
const sumWithInitial = array1.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
)
