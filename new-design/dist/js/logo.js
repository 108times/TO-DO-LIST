const logo = document.getElementById('logo');
export function logoHover() {
    logo.addEventListener('mouseover', event => {
        logo.src = "./img/logo-white.png";
    });
    logo.addEventListener('mouseleave', event => {

        logo.src = "./img/logo.png";
    })

}   