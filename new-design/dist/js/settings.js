// import { settings_clicked } from "./variables.js";
let settings_clicked = false;
export const settings_trigger = document.getElementById('settings-trigger');
const settings_popup = document.querySelector('.header__middle__right__settings__item__settings-pop-up');

export function showSettings(settings_clicked) {
    settings_popup.classList.remove('hidden');
    settings_popup.classList.add('visiblie');
    settings_clicked = true;
}
export function hideSettingsLocal() {
    settings_popup.classList.remove('visible');
    settings_popup.classList.add('hidden');
    settings_clicked = true;
}
export function hideSettings() {
    settings_popup.classList.remove('visible');
    settings_popup.classList.add('hidden');
    settings_clicked = false;
}

export function settingsFunc() {


    settings_trigger.addEventListener('click', function () {
        if (settings_clicked == false) {
            settings_popup.classList.remove('hidden');
            settings_popup.classList.add('visiblie');
            settings_clicked = true;
        } else if (settings_clicked == true) {
            settings_popup.classList.remove('visible');
            settings_popup.classList.add('hidden');
            settings_clicked = false;
        }

    })

}