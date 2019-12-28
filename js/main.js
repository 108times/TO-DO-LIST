function date() {

    let month = document.getElementById("month");
    let day = document.getElementById("day");
    let year = document.getElementById("year");
    let i = 0;
    let j = 0;

    if (day.selectedIndex == -1) {
        if (month.selectedIndex == "3" || month.selectedIndex == "5" || month.selectedIndex == "10") {

            while (day.firstChild) {
                day.removeChild(day.firstChild);
            }
            for (i = 0; i < 30; i++) {
                j = i + 1;
                var option = document.createElement("option");
                option.setAttribute("value", j);
                option.innerHTML = j;
                day.appendChild(option);
            }

        }
        if (month.selectedIndex == "0" || month.selectedIndex == "2" || month.selectedIndex == "4" || month.selectedIndex == "6" || month.selectedIndex == "7" || month.selectedIndex == "9" || month.selectedIndex == "11" || month.selectedIndex == "12") {

            while (day.firstChild) {
                day.removeChild(day.firstChild);
            }
            for (i = 0; i < 31; i++) {
                j = i + 1;
                var option = document.createElement("option");
                option.setAttribute("value", j);
                option.innerHTML = j;
                day.appendChild(option);
            }

        }
        if (month.selectedIndex == "1" && year.selectedIndex != "1") {

            while (day.firstChild) {
                day.removeChild(day.firstChild);
            }
            for (i = 0; i < 28; i++) {
                j = i + 1;
                var option = document.createElement("option");
                option.setAttribute("value", j);
                option.innerHTML = j;
                day.appendChild(option);
            }

        }
        if (month.selectedIndex == "1" && year.selectedIndex == "1") {
            while (day.firstChild) {
                day.removeChild(day.firstChild);
            }
            for (i = 0; i < 29; i++) {
                j = i + 1;
                var option = document.createElement("option");
                option.setAttribute("value", j);
                option.innerHTML = j;
                day.appendChild(option);
            }
        }
    } else {
        let d = day.selectedIndex;
        if (month.selectedIndex == "3" || month.selectedIndex == "5" || month.selectedIndex == "10") {

            while (day.firstChild) {
                day.removeChild(day.firstChild);
            }
            for (i = 0; i < 30; i++) {
                j = i + 1;
                var option = document.createElement("option");
                option.setAttribute("value", j);
                option.innerHTML = j;
                day.appendChild(option);
            }

            day.selectedIndex = d;
        }

        if (month.selectedIndex == "0" || month.selectedIndex == "2" || month.selectedIndex == "4" || month.selectedIndex == "6" || month.selectedIndex == "7" || month.selectedIndex == "9" || month.selectedIndex == "11" || month.selectedIndex == "12") {
            while (day.firstChild) {
                day.removeChild(day.firstChild);
            }
            for (i = 0; i < 31; i++) {
                j = i + 1;
                var option = document.createElement("option");
                option.setAttribute("value", j);
                option.innerHTML = j;
                day.appendChild(option);
            }

            day.selectedIndex = d;

        }
        if (month.selectedIndex == "1" && year.selectedIndex != "1") {
            while (day.firstChild) {
                day.removeChild(day.firstChild);
            }
            for (i = 0; i < 28; i++) {
                j = i + 1;
                var option = document.createElement("option");
                option.setAttribute("value", j);
                option.innerHTML = j;
                day.appendChild(option);
            }
            day.selectedIndex = d;
        }
        if (month.selectedIndex == "1" && year.selectedIndex == "1") {

            while (day.firstChild) {
                day.removeChild(day.firstChild);
            }
            for (i = 0; i < 29; i++) {
                j = i + 1;
                var option = document.createElement("option");
                option.setAttribute("value", j);
                option.innerHTML = j;
                day.appendChild(option);
            }
            day.selectedIndex = d;

        }
    }
}
let home_link = document.getElementById("home-link");



window.onload = date;
document.getElementById("day").addEventListener("click", date);


// auth2 = document.getElementById("auth-2");
// auth2.addEventListener("mouseover", function () {
//     home_link.style.color = orange;
// });
//
// home_link.addEventListener("mouseenter", function () {
//     event.target.style.color = "orange";
// });
$(document).ready(function () {
    let auth2 = $("#auth-2");
    let home_link = $("#home-link");

    auth2.on("mouseenter", function () {
        home_link.css({
            "opacity": "1"
        })
    }).on('mouseleave', function () {
        home_link.css({
            "opacity": "0"
        })
    })
});
