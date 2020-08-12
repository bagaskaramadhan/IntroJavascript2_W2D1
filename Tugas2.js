const name = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', ' Caroline', 'Carolyn',
    'Deidre', ' Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope'
];

const searchName = (str, int, callback) => {
    const lower = name.map(x => x.toLowerCase());
    const filtre = lower.filter(y => y.includes(str.toLowerCase()))
    return callback(filtre, int);
}
const test = (filtre, int) => {
    return filtre.filter((a,index) => {
        if (index < int) {
            return true
        }
    });
}
console.log(searchName('An', 5, test));

// const fGirl = (name, callback) => {
//     const hasil = `${name}`;
//     callback(hasil)
// };

// const getResult = (result) => {
//     console.log(result);
// }

// fGirl(name, getResult);

// const sayHello = (name, asd) =>{
//     const result = `Halo ${name}. Apa kabar?`;
//     const resulta = `Halo ${name}. Apa kabar?`;
//     asd(result,resulta);
// }

// const show = (bagas, resulta) =>{
//     console.log(bagas)
//     console.log(resulta)
// }
// sayHello('Bagaskara Ramadhan', show)