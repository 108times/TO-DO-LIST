import { primary_color, accent_color } from './variables.js';
const search = document.querySelector('.header__middle__left__content');
const searchbar = document.querySelector('.header__middle__left__content__search')
const search_icon = document.querySelector('.header__middle__left__content__icon');

function hideSearch() {
    searchbar.style.background = accent_color;
    search.style.width = "98%";
    searchbar.style.width = "98%";
    search.style.margin = "0 0 0 15px";
    search.style.background = accent_color;
}

function showSearch() {
    searchbar.style.background = primary_color;
    search.style.width = "200%";
    searchbar.style.width = "200%";
    search.style.margin = "0 -95% 0 15px"
    search.style.background = primary_color;
}

function searchHover() {
    let clicked = false
    search.addEventListener("click", event => {
        // showSearch();
        if (clicked == false) {
            showSearch();
            clicked == true;
        } else if (clicked == true) {
            hideSearch();
            clicked == false;
        }
    });

    search_icon.addEventListener("click", event => {

    });
}
export { search, searchbar, search_icon, hideSearch, showSearch, searchHover }