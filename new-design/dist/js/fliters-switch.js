import { accent_color, primary_color } from './variables.js';
const filter_inbox = document.getElementById('inbox-body');
const filter_today = document.getElementById('today-body');
const filter_next_days = document.getElementById('next-days-body');

const inbox_trigger = document.getElementById('inbox-trigger');
const today_trigger = document.getElementById('today-trigger');
const next_days_trigger = document.getElementById('next-days-trigger');

const today_icon = document.getElementById('today-1');

function todayIconWhite(param) {
    today_icon.style['border-color'] = primary_color;
    today_icon.style.color = primary_color;
}
function todayIconDefault(param) {
    today_icon.style['border-color'] = accent_color;
    today_icon.style.color = accent_color;
}

export function switchFilters() {
    inbox_trigger.addEventListener('click', event => {

        inbox_trigger.classList.add('active');
        today_trigger.classList.remove('active');
        next_days_trigger.classList.remove('active');

        filter_today.classList.remove('visible');
        filter_today.classList.add('hidden');

        filter_next_days.classList.remove('visible');
        filter_next_days.classList.add('hidden');

        filter_inbox.classList.remove('hidden');
        filter_inbox.classList.add('visible');

        inbox_trigger.src = "./img/inbox-white.png";
        todayIconDefault();
    });


    today_trigger.addEventListener('click', event => {
        inbox_trigger.classList.remove('active');
        today_trigger.classList.add('active');
        next_days_trigger.classList.remove('active');

        filter_next_days.classList.remove('visible');
        filter_next_days.classList.add('hidden');

        filter_inbox.classList.remove('visible');
        filter_inbox.classList.add('hidden');

        filter_today.classList.remove('hidden');
        filter_today.classList.add('visible');
        todayIconWhite();

    });

    next_days_trigger.addEventListener('click', event => {

        inbox_trigger.classList.remove('active');
        today_trigger.classList.remove('active');
        next_days_trigger.classList.add('active');

        filter_today.classList.remove('visible');
        filter_today.classList.add('hidden');

        filter_inbox.classList.remove('visible');
        filter_inbox.classList.add('hidden');

        filter_next_days.classList.remove('hidden');
        filter_next_days.classList.add('visible');
        todayIconDefault();
    });

}
