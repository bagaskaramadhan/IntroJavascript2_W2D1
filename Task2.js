//callback functions

let x = function () {
    console.log('Bagaskara');
}

let y = function (callback) {
    console.log(`Hello Selamat Pagi`);
    callback();
}

y(x);

let calc = function (num1, num2, calcType) {
    if (calcType === "add") {
        return num1 + num2;
    } else if (calcType === "multiply") {
        return num1 * num2;
    }
};

console.log(calc(2, 3, 'multiply')); //output = 5

const name = ['']