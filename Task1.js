const name = ['Bagas', 'Ana', 'Dika', 'Dede', 'Claudia', 'Zaid', 'Angga', 'Beni', 'Fadhil'];
const value = [21, 34, 12, 34, 456, 234, 65, 98, 98];

//sort
name.sort();
console.log(name);

//map
const map1 = value.map(x => x + 2);
console.log(map1);

//filter
const lucky = value.filter(function(test) {
  return test >= 100;
});
console.log(lucky);

