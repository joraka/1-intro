// Kaip atrodys ['one', 'two', 'three'] masyvas po ['one', 'two', 'three'].splice(1, 2, 'new'); panaudojimo?

const og = ['one', 'two', 'three'];

console.log('originalas -', og);
console.log('splice', og.splice(1, 2, 'new'))
console.log("rezultatas", og);

// atsakymai
// ['two', 'three']
// ['new']
// ['one', 'two', 'new']
// ???????????