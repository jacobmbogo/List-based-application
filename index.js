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
/*
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

switch (expression){
    statements
}





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
/*
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
    raima:"author"

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


globalThis.x = 1;
console.log(delete x);
*/

/*
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

//*We could also avoid the overhead of the extra object creation and copying by writing a version of Object.assign() that copies properties only if they are missing:
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

//*Serializing Objects: is the process of converting an object's state to a string from which it can later be restored. The functions JSON.stringify() and JSON.parse()
console.log("jacob otieno");


let review = {x: 1, y: {z: [false, null, ""]}};
let s = JSON.stringify(review);
let p = JSON.parse(s);

console.log(s);
console.log(p);

//*Object Methods

let newObject = Object.create(Object.prototype);
console.log(newObject);

//*The toString() method
//*It takes no arguments.

let subject = {x: 1, y: 1};
console.log(subject.toString());

//*The LocaleString() Method

let moneKsh = {
    x: 1000,
    y: 2000,
    toString: function(){return `(${this.x},${this.y})`;},
    toLocaleString: function(){
        return `(${this.x.toLocaleString()},${this.y.toLocaleString()})`;
    }
};
console.log(moneKsh.toString());
console.log(moneKsh.toLocaleString());

//*The valueOf() Method
let snu = 3;
console.log(snu.toString(4))

let point = {
    x:3,
    y:4,
    valueOf: function() {return Math.hypot(this.x, this.y);}
};
console.log(Number(point));

//*The toJSON(); Method

let point1 = {
    x:3,
    y:4,
    toString:function(){return`(${this.x}, ${this.y});`},
    toJSON: function(){return this.toString();}
};
console.log(Number(point));
console.log(JSON.stringify([point1]));

//*Extended Object Literal Syntax

let recent = 1, old = 3;
let updated = {recent, old}
console.log(updated.recent + updated.old);

//*Computed Property Names
//*code example not working


//*Symbols as Property Names
const extension = Symbol("my extension symbol");
let ot = {
    [extension]: {}
}
ot[extension].x = 0;
console.log(ot[extension]);

//*Spread Operator
let position = {x: 0, y: 0, z: 70};
let dimensions = { z: 100, height: 75, ...position};
console.log(dimensions);

let oj= { x: 1 };
let pj = { x: 0, ...oj };
console.log(pj.x) // => 1: the value from object o overrides the initial value
let qj = { ...oj, x: 2 };
console.log(qj.x); // => 2: the value 2 overrides the previous value from o.

let square = {
    area(){return this.side * this.side;},
    side: 10
}
console.log(square.area());

const METHOD_NAME = "m";
const symbol = Symbol();
let weirdMethods = {
    "method with Spaces"(x){ return x + 1;},
    [METHOD_NAME](x){ return x + 2;},
    [symbol](x){ return x + 3;}
}
console.log(weirdMethods["method with Spaces"](1));
console.log(weirdMethods[METHOD_NAME](1));
console.log(weirdMethods[symbol](1));

//*Property Getters and Setters
//*Also known as accessor properties :getter and setter

let newo = {
    dataProp: "value",

    get accessorProp() {return this.dataProp;},
    set accessorProp(value) {this.dataProp = value;}
};
*/

let p = {
    x: 1.0,
    y: 1.0,

    get r() { return Math.hypot(this.x, this.y);},
    set r(newvalue) {
        let oldvalue = Math.hypot(this.x, this.y);
        let ratio = newvalue/oldvalue;
        this.x *= ratio;
        this.y *= ratio;
    },
    get theta() { return Math.atan2(this.y, this.x);}

};
console.log(p.r);
console.log(p.theta);  

const serialnum = {
    _n: 0,

    get next(){ return this._n++;},
    set next(n){
        if (n > this._n) this._n = n;
        else throw new Error("serial number can only be set to a larger value");
    }
};
serialnum.next = 10;
console.log(serialnum.next);
console.log(serialnum.next);
console.log(serialnum.next);

const random = {
    get octet(){ return Math.floor(Math.random()*256); },
    get uint16(){ return Math.floor(Math.random()*65536); },
    get int16(){ return Math.floor(Math.random()*65536)-32768; }
};

console.log(random.uint16);

//^Chapter Seven: Arrays
//*Creating Arrays
//*Array literals
//*The ...spread operator on an iterable object
//*The Array() constructor
//*The Array.of() and Array.from() factory methods


//?Array literals
let empty = []; //An array with no elements.
//let b = [[1, {x: 1, y: 2}], [2, {x: 3, y: 4}]];

//?The Spread Operator
let a = [1, 2, 3];
let b = [0, ...a, 4];

console.log(b);

//*Strings are iterable, so you can use a spread operator to turn any string into an array of single-character strings:

let digits = [..."0123456789ABCDEF"];
console.log(digits);

//*Set objects are iterable, so an easy way to remove duplicate elements from an array is to convert the array to a set and then immediately convert the set back to an array using the spread operator;

let letters = [..."hello world"];
console.log([...new Set(letters)]);

//?The Array() Constructor
let mpya = new Array();
let old = new Array(10);

//?The Array.of() function can bbe used to create an array with a single argument:
let cute = Array.of(5);
console.log(cute);

//?The Array.from() works like the spread operator
let original = [45,45]
let copy = Array.from(original);
console.log(copy);
copy[0] = 56;
console.log(copy);

let c = ["world"];
let value = a[0];
c[1] = 3.14;
let i = 2;
c[i] = 3;
c[i + 1] = "hello";
c[c[i]] = c[0];

console.log(c);
c["5"] = "myfriend";
console.log(c[5]);
console.log(c);
c[-45] = true;
console.log(c);

//*Sparse Arrays:
let cupod = [,,];

//*Length of arrays
//*Using delete on an array does not alter the length of the array.
let cupoc = [1, 2, 3];
delete cupoc[2];
console.log(2 in cupoc);

console.log(cupoc.length);

//*Iterating arrays
let string = "";
for( let letter of letters){
    string += letter;
}
console.log(string);
let uppercase = "";
letters.forEach(letter => {
    uppercase += letter.toUpperCase();
});
console.log(uppercase);
//*If  you want to skip undefined and non-existent elements you might write:
/*
for( let i = 0; i < a.length; i++){
    if(a[i] === undefined) continue;
};
*/

//*Multidimensional Arrays
//* Create a multidimensional array
let table = new Array(10); // 10 rows of the table
for(let i = 0; i < table.length; i++){
    table[i] = new Array(10); // Each row has 10 columns
}

//* Initialize the array
for (let row = 0; row < table.length; row++){
    for(let col = 0; col < table[row].length; col++){
        table[row][col] = row * col;
    }
}

console.log(table[5][7]);
console.table(table);

//*Array Methods
//* Array iterator methods

let data = [3,4,3,4,5,7,8,2], sum = 0;
data.forEach(value => { sum += value; });

let squid = [11,2,,,3,undefined];
let dense = squid.filter(() => true);
console.log(dense);
squid = squid.filter(x => x !== undefined);
console.log(squid);

squid = squid.filter((x,i) => i % 2 === 0 )
console.log(squid);

console.log(data.reduce((x,y) => x + y));
let newmap = [-2, -1, 1, 2].flatMap(x => x < 0 ? [] : Math.sqrt(x));
console.log(newmap);

console.log(data.slice(2,6));
console.log(data.splice(1,2,"jacob"),data);

let op = new Array(5);
console.log(op.fill(6,2));

let deita = [1,6,3,4,5];
console.log(deita.copyWithin(2,3,1));

function findall(a, x){
    let results = [],
        len = a.length,
        pos = 0;
        
    while(pos < len){
        pos = a.indexOf(x, pos);
        if (pos === -1) break;
        results.push(pos);
        pos = pos + 1;
    }
    return results;
}
console.log(findall([1,2,5,7,3,8,9,10,31,45,6,2],31));

let sorted = [1,2,99,90,3,5,6,111];
console.log(sorted.sort((a,b) => a - b));


//^Functions
//* A function is a block of javascript code that is defined once but may be invoked, any number of times.

//*Defining functions
function jamie(o){
    for(let p in o){
        console.log(`${p}: ${o[p]}\n`);
    }
}
jamie(["name", "pie", "crudy"]);


//*Function Expressions:
let tensquared = function(x){return x*x;}(10);
console.log(tensquared);

//* Arrow functions
const total = (x,y) => x + y;
console.log(total(8,9));

//*Nested functions
function hypotenuse(a, b){
    function square(x) {return x*x;}
    return Math.sqrt(square(a) + square (b));
}

let hyp = hypotenuse(3,4);
console.log(hyp);

//* Invoking functions



