'use strict';





const images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg'];
const items = document.querySelector('.items')
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let currentItem = 0;

for (let i = 0; i < images.length; i++) {
        const item = document.createElement('div');
        item.classList.add('item');

        if (i === currentItem) {
                item.classList.add('active');
        }

        const img = document.createElement('img');
        img.src = `img/${images[i]}`;
        img.alt = `Background${i}`;

        item.append(img);
        items.append(item);
}


const domItems = document.querySelectorAll('.item');


prev.addEventListener('click', function () {
        console.log('ho cliccato prev');
        domItems[currentItem].classList.remove('active');
        if (currentItem > 0) {
                currentItem--;
        }
        else if (currentItem === 0) {
                currentItem = domItems.length - 1;
        }
        domItems[currentItem].classList.add('active');

})


next.addEventListener('click', function () {
        console.log('ho cliccato next');
        domItems[currentItem].classList.remove('active');
        if (currentItem < domItems.length - 1) {
                currentItem++;
        }
        else if (currentItem === domItems.length - 1) {
                currentItem = 0;
        }
        domItems[currentItem].classList.add('active');
})