const aside = document.querySelector('aside');
const toggleSide = document.querySelector('button');
const closeBtn = document.querySelector('.close-btn');

window.addEventListener('click', function (e) {
    if (!e.target.closest('aside')) {
        aside.classList.remove('show-sidebar')
    };
});

[toggleSide, closeBtn].forEach((element) => element.addEventListener('click', function (e) {
    aside.classList.toggle('show-sidebar');
    e.stopPropagation();
}));
