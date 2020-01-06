export function becomeX() {
    const line_1 = document.querySelector('#menu-toggle-line-1');
    const line_2 = document.querySelector('#menu-toggle-line-2');
    const line_3 = document.querySelector('#menu-toggle-line-3');

    let deg1 = 45;
    let deg3 = -45;
    line_1.style.width = "25px";
    line_3.style.width = "25px";
    line_1.style.transform = `rotate(${deg1}deg)`;
    line_2.style.opacity = '0';
    line_2.style['transition-duration'] = "0s";
    line_3.style['transform-origin'] = '0% 100%';
    line_3.style.transform = `rotate(${deg3}deg)`;
}
export function becomeMenu() {
    const line_1 = document.querySelector('#menu-toggle-line-1');
    const line_2 = document.querySelector('#menu-toggle-line-2');
    const line_3 = document.querySelector('#menu-toggle-line-3');

    line_1.style.width = "30px";
    line_3.style.width = "30px";
    line_1.style.transform = `none`;
    line_2.style.opacity = '1';
    line_3.style.transform = `none`;

}


export function menuToggle() {
    const menu_toggle = document.querySelector('.header__middle__left__mobile-menu-toggle');
    const main_filters = document.querySelector('.main__content__filters');
    let clicked = false;
    menu_toggle.addEventListener('click', event => {
        if (clicked == false) {
            becomeX();
            main_filters.style.left = 0;
            // menu_toggle.style.width = "100%";
            clicked = true;
        }
        else if (clicked == true) {
            becomeMenu();
            main_filters.style.left = "-100%";
            // menu_toggle.style.width = "20%";
            clicked = false;
        }
    });
}
