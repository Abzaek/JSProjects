let value = document.querySelector('#value');
let btns = document.getElementsByClassName('btn');


Array.from(btns).forEach(function (btn) {
    btn.addEventListener('click', (e) => {
        if (e.target.classList.contains('decrease')) {
            value.innerHTML = Number(value.innerHTML) - 1;
        } else if (e.target.classList.contains('increase')) {
            value.innerHTML = Number(value.innerHTML) + 1;
        } else {
            value.innerHTML = 0;
        }

        if (Number(value.textContent) < 0) {
            value.style.color = 'red';
        } else if (Number(value.textContent) > 0) {
            value.style.color = 'green';
        } else {
            value.style.color = 'black';
        }
    })
});
