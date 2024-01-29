const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let body = document.querySelector('body');
let btn = document.getElementsByClassName('btn')[0];
let colorName = document.getElementsByClassName('color')[0];

btn.addEventListener('click', () => {
    let bgColor = '#'
    for (let i = 0; i < 6; i++) {
        bgColor += hex[Math.floor(Math.random()*hex.length)]
    }
    colorName.innerHTML = bgColor;
    body.style.backgroundColor = bgColor;
});