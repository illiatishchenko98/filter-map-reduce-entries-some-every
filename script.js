'use strict';



const names = ['Illia', 'John', 'Larry', 'aefdaefse'];

const shortNames = names.filter(function (name) {
    return name.length < 5;


})


console.log(shortNames);


let answers = ['IlLiA', 'AnNA', 'Hello'];

const results = answers.map(item => {
    return item.toLowerCase();
});


console.log(results);



const some = [4, 'qwq', 'adasdas'];

console.log(some.some(item => typeof (item) === 'number'));


const some = [4, 'qwq', 'adasdas'];

console.log(some.every(item => typeof (item) === 'number'));



const arr = [4, 4, 2, 5, 9];
const res = arr.reduce((sum, current) => sum + current);

console.log(res);


const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'

};


const abc = Object.entries(obj).filter(item => item[1] === 'persone').map(item => item[0]);
console.log(abc);