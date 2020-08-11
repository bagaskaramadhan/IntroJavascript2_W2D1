//callback functions
const name = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Penelope',
    'Carol', 'Caroline', 'Bella', 'Carolyn',
    'Deidre', 'Olivia', 'Elizabeth',
    'Ella', 'Faith', 'Diana'
];

let x = function (str, int) {
    const nama = name.map( t => t.toLowerCase());
    const data = nama.filter(w => w.includes(str))
    return(data, int);
}

let searchName = function (aji, nana) {
    return aji.filter((fly, i) =>{
        if (i < nana){ return true}
        callback();
    });
};

console.log(searchName('an',3))

// let calc = function (num1, num2, calcType) {
//     if (calcType === "add") {
//         return num1 + num2;
//     } else if (calcType === "multiply") {
//         return num1 * num2;
//     }
// };

// console.log(calc(2, 3, 'multiply')); //output = 5


// const object = {
//     met1(){
//         return object.met2()
//     },
//     met2(){
//         return 'DUA';
//     }
// }
// console.log(object.met1());
// const name = ['']