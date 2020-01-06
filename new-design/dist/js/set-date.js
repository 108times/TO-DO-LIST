import { popUpLeave, popup } from './pop-up_click.js';

var weekday = new Array(7);
weekday[1] = "Mon";
weekday[2] = "Tue";
weekday[3] = "Wed";
weekday[4] = "Thu";
weekday[5] = "Fri";
weekday[6] = "Sat";
weekday[7] = "Sun";

var months = new Array(12);
months[0] = "Jan";
months[1] = "Feb";
months[2] = "Mar";
months[3] = "Apr";
months[4] = "May";
months[5] = "Jun";
months[6] = "Jul";
months[7] = "Aug";
months[8] = "Sep";
months[9] = "Oct";
months[10] = "Nov";
months[11] = "Dec";

const today = new Date();
const tomorrow = getTomorrow(today);

function getTomorrow(today) {
    let tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    return tomorrow;
}
function getDay(day) {
    let today_day = String(day.getDate());
    return today_day;
}
function getWeekDay(day) {
    let day_number = day.getDay();
    let today_week_day = weekday[day_number];
    return today_week_day;
}
function getMonth(day) {
    let month_number = day.getMonth();
    let today_month = months[month_number];
    return today_month;
}


function getNextWeekDay(today_day, today_week_day) {
    today_week_day = getWeekDay(today);
    let today_week_day_number = weekday.indexOf(today_week_day);
    console.log(weekday);
    console.log(today_week_day);
    console.log(today_week_day_number);
    let offset = 7 - today_week_day_number + 1;
    console.log(offset);
    let next_week_day = parseInt(today_day) + offset;
    console.log(next_week_day);
    return next_week_day;
}
function getNextWeekMonth(today_day, today_week_day) {
    let date = new Date();
    let today_week_day_number = weekday.indexOf(today_week_day);
    let offset = 7 - today_week_day_number;
    date.setDate(today.getDate() + offset);
    let next_week_month_number = date.getMonth();
    let next_week_month = months[next_week_month_number];
    return next_week_month;
}
const today_day = getDay(today);
const today_week_day = getWeekDay(today);
const today_month = getMonth(today);
const today_full_date = today_day + " " + today_month;

const tomorrow_day = getDay(tomorrow);
const tomorrow_week_day = getWeekDay(tomorrow);
const tomorrow_month = getMonth(tomorrow);
const tomorrow_full_date = tomorrow_day + " " + tomorrow_month;

const next_week_day = getNextWeekDay(today_day, today_week_day);
const next_week_week_day = "Mon";
const next_week_month = getNextWeekMonth(today_day, today_week_day);
const next_week_full_date = next_week_day + " " + next_week_month;

const today_title_date = document.querySelector('.main__content__tasks__body__title__date');
const today_icon = document.querySelector('.main__content__tasks__body__task__insert-data__select-date__pop-up__date-options__option-today__date');
const today_date = document.querySelector('.main__content__tasks__body__task__insert-data__select-date__pop-up__date-options__option-today');
const tomorrow_date = document.querySelector('.main__content__tasks__body__task__insert-data__select-date__pop-up__date-options__option-tomorrow');
const next_week_date = document.querySelector('.main__content__tasks__body__task__insert-data__select-date__pop-up__date-options__option-next-week');
const no_date = document.querySelector('.main__content__tasks__body__task__insert-data__select-date__pop-up__date-options__option-no-date');
const today_1 = document.getElementById('today-1');
const today_2 = document.getElementById('today-2');
const today_weekdate = document.getElementById('today-weekday');
const tomorrow_weekdate = document.getElementById('tomorrow-weekday');

const input = document.getElementById('date-inp');
export function setDate() {
    today_title_date.innerText = today_week_day + " " + today_day + " " + today_month;
    today_1.innerText = today_day;
    today_2.innerText = today_day;
    today_weekdate.innerText = today_week_day;
    tomorrow_weekdate.innerText = tomorrow_week_day;
    today_date.addEventListener('click', event => {
        input.value = today_full_date;
        popUpLeave();
    });
    tomorrow_date.addEventListener('click', event => {
        input.value = tomorrow_full_date;
        popUpLeave();
    });
    next_week_date.addEventListener('click', event => {
        input.value = next_week_full_date;
        popUpLeave();
    });
    no_date.addEventListener('click', event => {
        popUpLeave();
        input.value = "";
    });

}