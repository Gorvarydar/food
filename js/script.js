
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
    const modalContent = document.querySelector('.modal__content');

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        // modal.classList.toggle('show'); //* этот метод такжк уместен
        document.body.style.overflow = 'hidden'; //* при открытии модального страница не будет скролиться (overflow = hidden)
        clearInterval(modalTimerId);//* прерываем запуск модального окна
    }

    dataModal.forEach(btn => {
            btn.addEventListener('click', openModal);
        })

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = ''; //* оставляя пустую строку в значении , браузер сам решит что нада поставить по дефолту
    };

    dataClose.addEventListener('click', closeModal); //* передаем ф-ию , а не вызываем!

    modal.addEventListener('click', (e) => {  //* (е) указываем объект события и испульзуем в сравнениии его конечную цель e.target
        if (e.target === modal) {    //* сравнение с классом который у нас задан в переменных
            closeModal();
        }
    })

    document.addEventListener('keydown', (e) => {    //* назначаем событие для нажатие клавиши('keydown), поэтому обращаемся ко всему документу
        if (e.code === "Escape" && modal.classList.contains('show')) {    //*  у каждой клавиши есть свой code
            closeModal();
        }
    })
//  const modalTimerId = setTimeout(openModal, 5000); //*запускаем модальное окно с интервалом в 5 сек(есть НО см. ф-ю)

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.   documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

 window.addEventListener('scroll', showModalByScroll);
 
 //*window.pageYOffset - расстояние в px которое пользователь пролистал по  оси Y
 //*document.documentElement.clientWidth -  видимая в экране пользователя часть страницы
 //*document.documentElement.scrollHeight - высота всего конотента на страницы
 
});