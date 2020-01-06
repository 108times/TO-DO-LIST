import { primary_color, accent_color, text_color } from './variables.js';
export function addTaskHover() {
    const add_task = document.querySelector('.main__content__tasks__body__task');
    const add_task_icon = document.querySelector('.main__content__tasks__body__task__add-button__add-icon');
    add_task.addEventListener("mouseover", event => {
        add_task.style.color = accent_color;
        // add_task.style.fontWeight = "600";
        add_task_icon.style.background = accent_color;
        let src = '/img/add-white.png';
        add_task_icon.src = src;
    });

    add_task.addEventListener("mouseout", event => {
        add_task.style.color = text_color;
        // add_task.style.fontWeight = "400";
        add_task_icon.style.background = primary_color;
        let src = '/img/add.png';
        add_task_icon.src = src;
    });
}



export function addTaskClick() {
    const add_task = document.querySelector('.main__content__tasks__body__task');
    const insert = document.querySelector('.main__content__tasks__body__task__insert-data');
    const clicked = false;
    add_task.addEventListener('click', event => {
        if (clicked == false) {
            insert.style['pointer-events'] = "all";
            insert.style.opacity = "1";
        }
        if (clicked == true) {
            insert.style['pointer-events'] = "none";
            insert.style.opacity = "0";
        }
    })
}

