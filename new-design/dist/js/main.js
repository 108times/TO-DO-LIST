import './date';

window.onload = date;
document.getElementById("day").addEventListener("click", date);

const search = document.querySelector('.header__middle__left__content__search');
search.addEventListener("mouseover", event => {
    console.log("Mouse in");
});

search.addEventListener("mouseout", event => {
    console.log("Mouse out");
});


