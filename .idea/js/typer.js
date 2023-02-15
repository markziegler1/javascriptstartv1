// der er 7 (3+2+2) primitive typer i JS
// Number String Boolean
// null undefined
// Symbol (ES6)
// Object
// function

function showTypes(lst) {
    console.log('STARTER Udskrivning af typer')
    for (const  obj of lst) {
       console.log(obj + ' er af typen ' + typeof obj);
    }
}

const a  = 5.5
const arr = []
arr.push(a)
arr.push('hej')
arr.push(true)
arr.push(null)
arr.push(undefined)
arr.push(Symbol('hej'))
showTypes(arr)
