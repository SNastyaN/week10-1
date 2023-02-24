let a = prompt('введи цифру 1 для сложения');
let b = prompt('введи цифру 2 для сложения');



function sum(a,b){
    return +a + +b;
}

alert(sum(a,b))

let c = prompt('введи цифру 1 для вычитания');
let d = prompt('введи цифру 2 для вычитания');
function subtraction(c,d){
    return +c - +d;
}

alert(subtraction(c,d))


let e = prompt('введи цифру 1 для умножения');
let f = prompt('введи цифру 2 для умножения');
function multiplication(e,f){
    return +e * +f;
}

alert(multiplication(e,f))

let x = prompt('введи цифру 1 для деления');
let y = prompt('введи цифру 2 для деления');
function division(x,y){
    return +x / +y;
}

alert(division(x,y))