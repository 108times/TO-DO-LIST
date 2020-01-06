const priority_popup = document.querySelector('.main__content__tasks__body__task__insert-data__option-priority__pop-up');
const priority_popup_trigger = document.querySelector('.main__content__tasks__body__task__insert-data__option-priority');
const priority_popup_option_1 = document.querySelector('.main__content__tasks__body__task__insert-data__option-priority__pop-up__option-priority-1');
const priority_popup_option_2 = document.querySelector('.main__content__tasks__body__task__insert-data__option-priority__pop-up__option-priority-2');
const priority_popup_option_3 = document.querySelector('.main__content__tasks__body__task__insert-data__option-priority__pop-up__option-priority-3');
const priority_popup_option_4 = document.querySelector('.main__content__tasks__body__task__insert-data__option-priority__pop-up__option-priority-4');


export function priorityShowPopUp() {
    priority_popup.style.top = "100%";
    priority_popup.style.opacity = "1";
    priority_popup.style['pointer-events'] = "all";
}
export function priorityHidePopUp() {
    priority_popup.style.top = "220%";
    priority_popup.style.opacity = "0";
    priority_popup.style['pointer-events'] = "none";
}
export function choosePriority() {
    let clicked = false;
    priority_popup_trigger.addEventListener('click', event => {
        if (clicked == false) {
            priorityShowPopUp();
            clicked = true;
        } else if (clicked == true) {
            priorityHidePopUp();
            clicked = false;
        }

    });
    priority_popup_option_1.addEventListener('click', event => {
        priority_popup_trigger.src = "/img/flag-1.png";
    });
    priority_popup_option_2.addEventListener('click', event => {
        priority_popup_trigger.src = "/img/flag-2.png";
    });
    priority_popup_option_3.addEventListener('click', event => {
        priority_popup_trigger.src = "/img/flag-3.png";
    });
    priority_popup_option_4.addEventListener('click', event => {
        priority_popup_trigger.src = "/img/flag-4.png";
    });
}