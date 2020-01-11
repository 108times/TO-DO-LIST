const priority_popup = document.querySelector('.main__content__tasks__body__task__insert-data__option-priority__pop-up');
export const priority_popup_trigger = document.querySelector('.main__content__tasks__body__task__insert-data__option-priority');
const priority_popup_option_1 = document.querySelector('.main__content__tasks__body__task__insert-data__option-priority__pop-up__option-priority-1');
const priority_popup_option_2 = document.querySelector('.main__content__tasks__body__task__insert-data__option-priority__pop-up__option-priority-2');
const priority_popup_option_3 = document.querySelector('.main__content__tasks__body__task__insert-data__option-priority__pop-up__option-priority-3');
const priority_popup_option_4 = document.querySelector('.main__content__tasks__body__task__insert-data__option-priority__pop-up__option-priority-4');
let clicked = false;

export function priorityPopUp() {
    priority_popup.style.top = "140%";
    priority_popup.style.opacity = "0";
    priority_popup.style['pointer-events'] = "none";
    clicked = false;

}
export function priorityPopUpShow() {
    priority_popup.style.top = "90%";
    priority_popup.style.opacity = "1";
    priority_popup.style['pointer-events'] = "all";
    clicked = true;

}
export function choosePriority() {
    priority_popup_trigger.addEventListener('click', event => {
        if (clicked == false) {
            priorityPopUpShow();

        } else if (clicked == true) {


            priorityPopUp();
        }
    });

    priority_popup_option_1.addEventListener('click', event => {
        priority_popup_trigger.src = "/img/flag-1.png";
        // priorityHidePopUp();
        priority_popup_trigger.click();
    });
    priority_popup_option_2.addEventListener('click', event => {
        priority_popup_trigger.src = "/img/flag-2.png";
        // priorityHidePopUp();
        priority_popup_trigger.click();
    });
    priority_popup_option_3.addEventListener('click', event => {
        priority_popup_trigger.src = "/img/flag-3.png";
        // priorityHidePopUp();
        priority_popup_trigger.click();
    });
    priority_popup_option_4.addEventListener('click', event => {
        priority_popup_trigger.src = "/img/flag-4.png";
        // priorityHidePopUp();
        priority_popup_trigger.click();
    });
}