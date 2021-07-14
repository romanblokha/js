let company = 'okten';  //string
let status = 'is cool';
document.write( '<h1>' + company + " " + status + '</h1>' )
document.write(`<h1>${company} ${status}<h1/>`);

let num = 100500;
console.log(num);


let a = 10; // number
let b = 20;
console.log(a+b+a );
console.log(13 % 5);

console.log(typeof company); //string
console.log(typeof num); //munber

let skiils = ['html', 'css', 'scrum'];
console.log(skiils);
console.log(skiils[1]);
skiils[3] = a;
console.log(skiils);
console.log(typeof skiils)

let me = {
    id : 1,
    name : 'Roman',
    surname : 'Blokha',
    skiils : ['barista', 'html', 'css']
};
console.log(me);
console.log(me.name);
document.write(`<h2>my name is ${me.name} and my primary skills is ${me.skiils[2]}<h2/>`);
console.log(me.skiils[2]);

let products = [
    {id:1, title:'milk', price:23},
    {id:2, title:'juice', price:25},
    {id:3, title:'bread', price:16}
];


let x = 10;
let y = 20;
let z = 30;
let truth = x < y || x > z;
console.log(truth)



function showName (name, surname) {
    let fullName = name + ' ' + surname;
    return fullName;
}
let romanName = 'Roman';
let romanSurname = 'Blokha';
let romanFullName = showName(romanName, romanSurname);

console.log(romanFullName);
