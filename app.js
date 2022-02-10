let num = document.querySelector('#num');
const endingNum = document.querySelector('#endingNum');


let randomNumber = () => {
    return Math.floor((Math.random()*endingNum.value)+1);
}

let newRandomNumber = () => {
    num.innerText = `${randomNumber()}`;
}

newRandomNumber();

function noenter() { return !(window.event && window.event.keyCode == 13) };