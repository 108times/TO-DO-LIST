const add_time_popup = document.querySelector('.main__content__tasks__body__task__insert-data__select-date__pop-up__add-time__pop-up');
const add_time_add_button = document.querySelector('.main__content__tasks__body__task__insert-data__select-date__pop-up__add-time__pop-up__section-2__add-button');
const add_time_cancel_button = document.querySelector('.main__content__tasks__body__task__insert-data__select-date__pop-up__add-time__pop-up__section-2__cancel-button');
const add_time_popup_trigger = document.querySelector('.main__content__tasks__body__task__insert-data__select-date__pop-up__add-time__trigger');
const add_time_input = document.querySelector('.main__content__tasks__body__task__insert-data__select-date__pop-up__add-time__pop-up__section-1__input');
const input = document.getElementById('date-inp');

function timePopUpShow() {
    add_time_popup.style.top = "-120%";
    add_time_popup.style.opacity = "1";
    add_time_popup.style['pointer-events'] = "all";
}
function timePopUpHide() {
    add_time_popup.style.top = "-220%";
    add_time_popup.style.opacity = "0";
    add_time_popup.style['pointer-events'] = "none";
}
export function addTime() {

    add_time_input.value = "12:00";

    add_time_popup_trigger.addEventListener('click', event => {
        timePopUpShow();
    });
    add_time_cancel_button.addEventListener('click', event => {
        timePopUpHide();
    })
    add_time_add_button.addEventListener('click', event => {
        let value = add_time_input.value;
        input.value += " " + value;
        timePopUpHide();
    })
}