
const btns = document.querySelectorAll('.open-btn');

btns.forEach((btn) => {
    btn.addEventListener('click', openForm);
});

const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-form');
const form = document.querySelector('.form');

closeBtn.addEventListener('click', closeForm);

function closeForm() {
    popup.classList.remove('active');
}

function openForm() {
    popup.classList.add('active');
}

const menuBtn = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu-list');



// Открытие/закрытие меню
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu-active');
});


const menuItems = document.querySelectorAll('.menu-list-item');


menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        menu.classList.remove('menu-active'); // Закрываем меню
    });
});



