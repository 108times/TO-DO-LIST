import { primary_color, accent_color, text_color, accent_color_darker_reverse } from './variables.js';
const search = document.querySelector('.header__middle__left__content');
const searchbar = document.querySelector('.header__middle__left__content__search');
const search_icon = document.querySelector('.header__middle__left__content__icon');

function hideSearch() {
    searchbar.classList.add('search-white');
    searchbar.classList.remove('search-black');

    searchbar.style.background = accent_color;
    search.style.width = "100%";
    searchbar.style.width = "100%";
    search.style.margin = "0 0 0 0";
    search.style.background = accent_color;
    searchbar.style.color = primary_color;
    search_icon.src = "./img/search-white.png";
}

function showSearch() {
    searchbar.classList.remove('search-white');
    searchbar.classList.add('search-black');

    searchbar.style.background = accent_color_darker_reverse;
    search.style.width = "200%";
    searchbar.style.width = "200%";
    search.style.margin = "0 -100% 0 0"
    search.style.background = accent_color_darker_reverse;
    searchbar.style.color = text_color;
    search.style.color = text_color;
    search_icon.src = "./img/search.png";
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