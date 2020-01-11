import { primary_color, secondary_color, accent_color, accent_color_darker, text_color, settings_clicked } from './variables.js';
import { popUpClick, popUpLeave, popup } from './pop-up_click.js';
import { addTaskClick, addTaskHover, cancelClick } from './add-task.js';
import { becomeMenu, becomeX, menuToggle } from './filters_menu.js';
import { search, searchbar, search_icon, hideSearch, showSearch, searchHover } from './search.js';
import { setDate } from './set-date.js';
import { filterHover } from './filter-hover.js';
import { addTime } from './add-time.js';
import { choosePriority, priorityPopUp } from './choose-priority.js';
import { switchFilters } from './fliters-switch.js';
import { logoHover } from './logo.js';
import { settingsFunc, hideSettings, settings_trigger } from './settings.js';
import { jqAjax } from './form.js';

(function () {
    const input = document.getElementById('date-inp');
    const container = document.getElementById('calendar');
    const datepicker = new TheDatepicker.Datepicker(null, container);
    datepicker.render();

    datepicker.options.onSelect((event, day, previousDay) => {
        let selected_day = day.dayNumber;
        let selected_month = datepicker.getCurrentMonth().toString();
        selected_month = selected_month.slice(4, 7);
        let selected_date = selected_day + " " + selected_month;
        // selected_month = selected_month.slice(23, selected_month.length - 1);
        console.log(day.dayNumber);
        // console.log(event.getMonth());
        console.log(selected_month);
        input.value = selected_date;
        popUpLeave();
        setDate();
    });
})();


// import { date } from '/date';
// window.onload = date;
// document.getElementById("day").addEventListener("click", date);

const main = document.querySelector('.main');
const main_body = document.querySelector('.main__content__tasks__body');
const main_body_right = document.querySelector('.main__content__tasks__empty-space-right');
const main_body_left = document.querySelector('.main__content__tasks__empty-space-left');
const header_left = document.querySelector('.header__left');
const header_middle = document.querySelector('.header__middle');
const header_right = document.querySelector('.header__right');
const filters = document.querySelector('.main__content__filters');
const close_button = document.querySelector('.main__content__tasks__body__task__insert-data__select-date__pop-up__add-time__save-button');
main.addEventListener("click", event => {
    hideSearch();
    hideSettings();
    // priorityPopUp();
});
main_body_right.addEventListener("click", event => {
    popUpLeave();
    hideSettings();
    priorityPopUp();
});
filters.addEventListener("click", event => {
    popUpLeave();
    hideSettings();
    priorityPopUp();
    console.log('click');
});
header_left.addEventListener("click", event => {
    hideSettings();
    hideSearch();
    priorityPopUp();
    popUpLeave();
});
header_middle.addEventListener("click", event => {
    popUpLeave();
    priorityPopUp();
});
header_right.addEventListener("click", event => {
    hideSettings();
    hideSearch();
    priorityPopUp();
    popUpLeave();
});
close_button.addEventListener("click", event => {
    popUpLeave();
    filters.click();
});



// logoHover();

setDate();
switchFilters();
searchHover();
addTaskHover();
menuToggle();
addTaskClick();
popUpClick();
filterHover();
cancelClick();
addTime();
choosePriority();
settingsFunc();
jqAjax();