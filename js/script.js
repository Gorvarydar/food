
window.addEventListener('DOMContentLoaded', () => {
    //Tabs
    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');  //*css-класс
            item.classList.remove('show', 'fade')  //*css-классы
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {    //* значение по умолчанию при вызове ф -ии без аргумента присваивается 0 если задать это при её определениии
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent(0);

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {         //*  1-й аргумент элемент tabs , 2-й номер этого элемента по порядку
                if (target == item) {          //* сравнение элемента в который мы кликнули с тем который мы перебираем
                    hideTabContent();
                    showTabContent(i);
                }
            })
        };
    });


// modal

const modal = document.querySelector('.modal');
const dataClose = document.querySelector('[data-close]');
const dataModal = document.querySelectorAll('[data-modal]');

dataModal.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.classList.add('show');
        modal.classList.remove('hide');
        // modal.classList.toggle('show'); //* этот метод такжк уместен
        document.body.style.overflow = 'hidden'; //* при открытии модального страница не будет скролиться (overflow = hidden)
    })

    dataClose.addEventListener('click', () => {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = ''; //* оставляя пустую строку в значении , браузер сам решит что нада поставить по дефолту
        
    })
})

});