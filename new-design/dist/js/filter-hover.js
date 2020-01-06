import { text_color, accent_color, border_black, primary_color, secondary_color } from './variables.js';
const filter_item = document.querySelector('.main__content__filters__content__items__item');
const filter_item_today_icon = document.querySelector('.main__content__filters__content__items__item__icon-today');
const filter_item_icon = document.querySelector('.main__content__filters__content__items__item__icon');
export function filterHover() {
    // filter_item.addEventListener('mouseover', event => {
    //     // filter_item_icon.style['border-color'] = primary_color;
    //     filter_item.style.background = accent_color;
    //     filter_item.style.border = border_black;
    //     filter_item.style.color = primary_color;
    //     filter_item_today_icon.style.color = text_color;
    // });
    // filter_item.addEventListener('mouseleave', event => {
    //     // filter_item_icon.style['border-color'] = accent_color;
    //     filter_item.style.background = secondary_color;
    //     filter_item.style.border = "1px solid $secondary-color";
    //     filter_item.style.color = text_color;
    //     filter_item_today_icon.style.color = text_color;
    // })
}