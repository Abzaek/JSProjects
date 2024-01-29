const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

var body = document.querySelector('body');
var btn = document.getElementsByClassName('btn')[0];
var colorName = document.getElementsByClassName('color')[0];



btn.addEventListener('click', () => {
    var bgColor = colors[Math.floor(Math.random() * colors.length)];
    colorName.innerHTML = bgColor;
    body.style.backgroundColor = bgColor;
});