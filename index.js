/*
//todo: JavaScript: The Definitive Guide

//^Chapter one: Introduction to JavaScript
let x;
x = 9;
console.log(x);

//*Objects
let book = {
    topic: "JavaScript",
    edition: 7
};

//*Accessing the objects properties
console.log(book.topic);
console.log(book["edition"]);
book.author = "Flanagan";
book.contents = {};
console.table(book);

//*Conditionally access properties with?.
console.log(book.contents?.ch01?.sect1);
console.log(book?.topic);

//*Arrays
let primes = [2,3,5,7];
console.log(primes[0]);

//*Displaying the last element of an array
console.log(primes[primes.length-1]);

//*Arrays and objects can hold other arrays and objects:
let points = [
    {x:0, y:0},//*an array with 2 elements
    {x:1, y:1}//*each element is an object
];

let data = { //*an object with two properties
    trial1: [[1,2], [3,4]], //*The value of each property is an array
    trial2: [[1,2], [4,5]] //*The elements of the arrays are arrays
};

points.dist = function(){
    let p1 = this[0];
    let p2 = this[1];
    let a = p2.x - p1.x;
    let b = p2.y - p1.y;
    return Math.sqrt(a*a + b*b);
}

console.log(points.dist().toFixed(2));

function abs(x){
    if (x >= 0){
        return x;
    }else{
        return -x;
    }
}
console.log(abs(-10));

function sum(array){
    let sum = 0;
    for(let x of array){
        sum += x;
    }
    return sum;
}
sum(primes);

*/

/*
c(sum(primes));
c(abs(10));

function factorial(n){
    let product = 1;
    while(n > 1){
        product *= n;
        n--;
    }
    return product;
}
c(factorial(5));

const power = function (base, exponent){
    let result = 1;
   for(let count = 0; count < exponent; count ++){
        result *= base;
   }
    return result;
}

c(power(2, 10));

function factorial2(n){
    let i, product = 1;
    for(i = 2; i <= n; i++)
    product *= i;
    return product;
}
c(factorial2(5));

function multiplier(factor) {
    return (j) => factor * j;
    }
    let twice = multiplier(2);
c(twice(5));

class Point {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    distance(){
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}
let p = new Point(1,1);
c(p.distance());


class Word {
    constructor(word){
        this.word = word;
    }
    capitalize(){
        return this.word.toUpperCase();
    }
}

let neWord = new Word("jacob mbogo ogot");
c(neWord.capitalize());

class EnglishTotalMarks {
    constructor(grammer, composition){
        this.grammer = grammer;
        this.composition = composition;
    }
    compute(){
        return (((this.grammer * 60)/50) + this.composition);
    }
}

let totalMark = new EnglishTotalMarks(42, 33);
c(totalMark.compute());

let okIterator = "OK"[Symbol.iterator]();
c(okIterator.next());

class Matrix {
    constructor(width, height, element = (x, y) => undefined) {
    this.width = width;
    this.height = height;
    this.content = [];
    for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
    this.content[y * width + x] = element(x, y);
    }
    }
    }
    get(x, y) {
    return this.content[y * this.width + x];
    }
    set(x, y, value) {
    this.content[y * this.width + x] = value;
    }
    }


//^Chapter Two: Lexical Structure

//*The text of a JavaScript Program

console.log("\u{1F600}");

let age = new Map();
age.set("Jennifer",62);

c(age.has("Julia"));
c(age.get("Jennifer"));

c(Math.imul(4,5));
 

let ji = 'You\'re right, it can\'t be a quote';
c(ji);

let s = "Hello, world";
c(s.indexOf("l",4));

c("5".padStart(3,"0"));

let text = "testing: 1, 2, 3";
let pattern = /\d+/g;
c(pattern.test(text));

let symname = Symbol("propname");
let o = {};
o[symname] = 1;
c(o);
c(o[symname]);

o[symname] = 2;
c(o);


let strname = "string name";
let v = {};
v[strname] = 2;
c(v[strname]);
c(v);
v[strname] = 2;
c(v);

let l = Symbol.for("shared");
let t = Symbol.for("shared");
c(l == t);
c(Symbol.keyFor(t));
c(undefined == null);
c(parseInt("zz", 36));


let  listO= {x:1, y:2};
for(const [name, value] of Object.entries(listO)){
    c(name, value);
};

let [u, ...y] = [1,2,3,4];
c(y);

//^Chapter 4: Expressions and Operators

let a = { b: {}};
c(a.b?.c?.d);//* The propery access with "?." is "short-circuiting"

let m;
let index = 0;
try {
    m[index++];
}catch(e){
    index
}
c(m?.[index++]);

//* Invocation expressions
//*An invocation is JavaScript's syntax for calling (or executing) a function or method.

function square(x, log){
    log?.(x);
    return x * x;
}

let object = {
    name: "jay",
    age: function() {
        return this.name;
    }
};
c(object.m?.());

//^Object Creation Expressions
//*An object creation expressions creates a new object and invokes a function (called a constructor) to initialize the properties of that object.


c(isNaN(NaN));

//*The in operator
let point = {x: 1, y: 1}
c("x" in point);

class Mean{
    constructor(h, s){
        this.h = h;
        this.s = s;
    }
    avermean(){
        return (this.h + this.s)/2;
    }

}
let mean = new Mean (4,6);
c(mean.avermean());


function low(){
    
}

let okay = new low();
c(okay instanceof Array);

const num = [3,6,9];
num.push(num.push(num.pop()));
c(num);
*/

/*let username = prompt("Enter username");
function greeting(){
    greet = "hello " + (username ? username : "there!!");
    return console.log(greet);
}
greeting();
*/

for (let i = 0, j = 10; i < j; i++, j--){
    console.log(i + j);
}

//*Compound and empty statements
{
    x = Math.PI;
    cx = Math.cos(x);
    console.log("cos(n) = " + cx);
}


//*Switch statements
//*general syntax: 
/*

switch (expression){
    statements
}

*/



switch(3){
    case 0: number = "below 4"
    break;

    case 2: number = "below 4"
    break;

    case 3: number = "below 4"
    break;
    
    default: number = "not below 4"
    break;
}

console.log(number);


function convert (x){
    switch(typeof x){

        case "number": 
        return x.toString(16);

        case "string":
        return '"' + x + '"';

        default:
            return String(x);

    }
}

console.log(convert('jina'));

let i, j, sum = 0;
for(i = 0, j = 10; i < 10; i++, j--){
    sum += i * j;
}
console.log(sum);

let o = {x: 1, y: 2, z:3};
let keys = "";
for(let k of Object.keys(o)){
    keys += k;
}
console.log(keys);
let total = 0;
for(let v of Object.values(o)){
    total += v;
}
console.log(total);

let frequency = {};
for(let letter of "mississippi"){
    if (frequency[letter]){
        frequency[letter]++;
    } else {
        frequency[letter] = 1;
    }
}
console.log(frequency);

let mind = {occupied: "yes"}
console.log(mind["occupied"]);

let text = "Na na na na na na na na Batman!";
let wordSet = new Set(text.split(" "));
let unique = [];
for (let word of wordSet){
    unique.push(word);
}
console.log(unique);

let m = new Map([[1, "one"]]);
for (let [key, value] of m){
    console.log(key);
    console.log(value);
}

let list = {

    name:"Jacob",
    age: 16,
    sex: "male",
    school:"Technical University Of Mombasa"

}

for (let component in list){
    console.log(list[component]);
}

let update = {x: 1, y: 2, z: 3, type:"cute"};
let a = [], n = 0;
for(a[n++] in update);

console.log(a);

function persistence(num) {
    
    let numStr = num.toString();
    let numArr = numStr.split("");
    num = numArr.reduce((a,b) => a * b);

            if (num > 10){
                return persistence(num);
            } else {
                return num;
            }

}

console.log(persistence(999));

let they = [1,2,3,4,5];
console.log(they.findIndex(x => x ===3));

let names = "jacob";
console.log(names.indexOf("a"));

function order(words){
    let newOrder =[];
    let array = words.split(" ");
    for(i = 0; i < array.length; i++){
      let position = words.indexOf(i)
      newOrder.push([position]);
      return newOrder;
    }
   
  }
console.log(order("jack is fine"));


let sentensi = "james wa team";
let men = sentensi.split(" ");
console.log(men);
console.log(men[1].indexOf("a"));

let alphabet = {x: 1, y: 2, z:3};
let ac = [], q = 0;
for( ac[q++] in alphabet);

for(let q in alphabet) console.log(q);

let data = [7,8,undefined,3,4,5];
let sumTotal = 0;
for(let i = 0; i < data.length; i++){
    if( !data[i]) break;
    sumTotal += data[i];
}
console.log(sumTotal);

/*
function factorial (x){
    if(x < 0) throw new Error("x must not be negative");
    let f;
    for( f = 1; x > 1; f *= x, x--);
    return f;
}

console.log(factorial(4));

try{
    let n = Number(prompt("Please enter a positive integer", ""));
    let f = factorial(n);
    alert(n + "! = " + f);
}
catch(ex){
    alert(ex);
}
*/ 
class Circle {
    constructor(radius) { this.r = radius; }
    area() { return Math.PI * this.r * this.r; }
    circumference() { return 2 * Math.PI * this.r; }
}
let aream = new Circle(5);
console.log(aream.area());
console.log(aream.circumference())


//^Chapter 6: Objects
//*Querying and setting properties
let book = {
    "main title": "JavaScript", // These property names include spaces,
    "sub-title": "The Definitive Guide", // and hyphens, so use string literals.
    for: "all audiences", // for is reserved, but no quotes.
    author: { // The value of this property is
    firstname: "David", // itself an object.
    surname: "Flanagan"
    },
    raima:Symbol("author")

}

console.log(book.author)
console.log(book["main title"])

let another = Object.create(book);
another.author.firstname = "Jack";
console.log(another.author);
another.year = 2016;
another.motto =  function motto(){
    console.log("I am able")
}

//*Objects as Associative Arrays


let addr = "";
for(let i = 0; i < 4; i++) {
addr += [`address${i}`] + "\n";
}
console.log(addr);

let portfolio = {};
portfolio.ibm = 50;
portfolio.samsung = 59;
portfolio.dell = 70;
portfolio.zoom =20;

function addstock(portfolio, stockname, shares){
    portfolio[stockname]=shares;
}

addstock(portfolio,"idm", 30);

console.log(portfolio);


function computeValue(portfolio){
    let total = 0.0;
    for(let stock in portfolio){
        let shares = portfolio[stock];
        total += shares
    }
    return total;
}
console.log(computeValue(portfolio));
console.log(another.author);

/*
globalThis.x = 1;
console.log(delete x);
*/


//*Testing properties
let identification = {

    name: "Jacob Mbogo",
    gender: "male",
    age: 17

}

console.log("name" in identification);
console.log("male" in identification);

console.log(identification.hasOwnProperty("gender"));
console.log(identification.propertyIsEnumerable());

console.log(another.hasOwnProperty("author"));
console.log(another.hasOwnProperty("year"));

//*Enumerating properties

for(let element in another){
    if(!another.hasOwnProperty(element)) continue;
    console.log(element);
}

console.log(identification.age !== undefined);

for(let element in another){
    if (typeof another[element] === "function") continue;
    console.log(element);
}

console.log(Object.keys(book));
console.log(Reflect.ownKeys(book));

console.log(JSON.stringify(book));

//*Extending Objects
//*copying properties from one object to another object

let target = {x: 1}, source  = {y: 2, z: 3};
for(let key of Object.keys(source)){
    target[key] = source[key];
}

console.table(target);

//*But because this is a common operation, various JS frameworks have defined utility functions, often named extend(), to perform this copying operation. Finally, this ability comes to the core JavaScript language in the form of Object.assign


let newbook = (Object.assign({},{ritual: "abormination", danger: "loss of life"}, book));
console.table(newbook);

function merge( target, ...sources){
    for (let source of sources){
        for(let key of Object.keys(source)){
            if(!(key in target)){
                target[key] = source[key];
            }
        }
    }
    return target;
}
console.log(merge({x: 1}, {x: 2, y: 2}, {y: 3, z: 4}));