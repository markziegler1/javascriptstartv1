console.log("Jeg er i setbackgroundcolor.js");

const body = document.querySelector('body');
const inputColor = document.querySelector('.inputColor');
const setColor = document.querySelector('.setColor');


const colpicker = document.querySelector('.colpicker');

function setbackgroundcolor() {
    const body = document.querySelector('body');
    const color = inputColor.value;
    body.style.backgroundColor = color;

}

function setBackgroundColor2(e){
   body.style.backgroundColor = colpicker.value;
    console.log(e)
}

setColor.addEventListener("click", setbackgroundcolor);

inputColor.addEventListener('click', setbackgroundcolor)
inputColor.addEventListener('keyup', setbackgroundcolor)


colpicker.addEventListener('input', setBackgroundColor2)

