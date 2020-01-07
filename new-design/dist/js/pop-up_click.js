
let date_inp = document.querySelector(".main__content__tasks__body__task__insert-data__select-date__overlay");
export const popup = document.getElementById("date-popup");
// let popup_clicked = false;
export function popUpClick() {
    date_inp.addEventListener('click', event => {
        // popup.classList.add('popup-opened');
        popup.classList.remove('popup-closed');
        // if (popup_clicked == false) {

        // var style = document.createElement('style');
        // document.head.appendChild(style);
        // style.sheet.insertRule('#date-popup {color: darkseagreen; pointer-events:all' +
        //     'opacity = 1; top = "100%"; z-index = 50}');

        popup.style.opacity = 1;
        popup.style.top = "100%";
        popup.style['z-index'] = 50;
        popup.style['pointer-events'] = "all";

        //     popup_clicked = true;
        // } else if (popup_clicked == true) {
        //     popUpLeave();
        //     popup_clicked = false;
        // }

    })
}

export function popUpLeave() {

    let popup = document.getElementById("date-popup");
    popup.style.opacity = 0;
    popup.style.top = "200%";
    popup.style['z-index'] = 0;
    popup.style['pointer-events'] = "none";

}
