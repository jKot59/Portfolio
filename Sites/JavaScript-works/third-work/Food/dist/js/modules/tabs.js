function tabs (tabsParent, tabsBtns, tabsWindows) {

    const tabs = document.querySelector(tabsParent),  // родитель кнопок
          tabsItems = tabs.querySelectorAll(tabsBtns), // все кнопки
          tabContent = document.querySelectorAll(tabsWindows); // картинки

    hideTab(); // скрываем перовначально все табы
    showTab(); // открываем по умолчанию нулевой таб

    //вешаем обработчик кликов на родителя
    tabs.addEventListener('click', event => {

    // если кликнули по родителю и в ивэент таргете будет класс tabheader__item
    if (event.target && event.target.classList.contains(tabsBtns.slice(1))) {
            // переберем весь список кнопок
            tabsItems.forEach((item, i) => {
                // удалим у всех табов жирненький шрифт
                item.classList.remove('tabheader__item_active');
                // найдем нужную кнопку из таргета и из перебора
                if (event.target == item) {
                    // установим только для кликнутого таба жирненький шрифт
                    item.classList.add('tabheader__item_active');
                    hideTab();  // скроем все картинки
                    showTab(i); // откроем то на котором в цикле будет i
                }
            });
        }
    });

    /* TABS FUNCTIONS */

    // фунция скрывающая все табы кроме того, на который кликнули
    function hideTab() {
        tabContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
    }
    // показываем таб
    function showTab(i = 0) {
        tabContent[i].classList.add('show', 'fade');
        tabContent[i].classList.remove('hide');
    }

}

export default tabs;
