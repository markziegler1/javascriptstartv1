const fruits = ['apple', 'banana', 'orange'];

function myFruits(item) {
    const ptag = document.getElementById("demo");
    console.log(ptag)
    ptag.innerHTML += item + ' ';
}

function myFunc2(item,index){
    const ptag = document.getElementById("demo");
    ptag.innerHTML += "<br>" + item + ': ' + index + ' ';

}
fruits.forEach(myFruits);
fruits.forEach(myFunc2);