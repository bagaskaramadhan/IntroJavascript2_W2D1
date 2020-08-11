const name = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Penelope',
    'Carol', 'Caroline', 'Bella', 'Carolyn',
    'Deidre', 'Olivia', 'Elizabeth',
    'Ella', 'Faith', 'Diana'
];
const number = [1, 200, 3, 4, 5, 17, 12, 23];
//1
tforeach = () => {
    name.forEach(function (names) {
        console.log(names)
    });
}
// tforeach();

//2
tsort = () => {
    console.log(number.sort());
}
// tsort();

//3
tpush = (num) => {
    let pushi = number.push(num);
    console.log(number);
}
// tpush(10);

//4
tmap = () => {
    const arrMap = number.map(x => x * 2);
    console.log(arrMap)
}
// tmap();

//5
tfilter = () => {
    const flitre = number.filter(x => x >= 10);
    console.log(flitre);
}
// tfilter();

//6
tsplit = (sntnce) => {
    const sentence = sntnce
    const splitted = sentence.split(" ");
    console.log(splitted);
}
// tsplit('God Has Fallen');

//7
tjoin = () => {
    let joni = name.join(' Cassa, ');
    console.log(joni);
}
// tjoin();

//8
tslice = (num1, num2) =>{
    let jojo = name.slice(num1, num2);
    return jojo;
}
// console.log(tslice(2, 4))

// 9
let tpop = number.pop()
// console.log(tpop);

//10
function tsplice(num1,num2) {
    let remove = name.splice(num1, num2);
    console.log(name + '\n Yang Ter-Remove : ' + remove);
}
tsplice(0,5);