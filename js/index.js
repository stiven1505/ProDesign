
var landingIcon = document.querySelector('.landing-icon');
var instagramIcon = document.querySelector('.instagram-icon');
var facebookIcon = document.querySelector('.facebook-icon');
var gmailIcon = document.querySelector('.gmail-icon');
var whatsappIcon = document.querySelector('.whatsapp-icon');

var landing = document.querySelector('.landing');
var instagram = document.querySelector('.instagram');
var facebook = document.querySelector('.facebook');
var gmail = document.querySelector('.gmail');
var whatsapp = document.querySelector('.whatsapp');

let anchoPantalla;
let posicionBtn;

let viewPc = 1440;
let viewTablet = 1280;
let viewMovil = 430;

landing.addEventListener('click', function () {
    setTimeout(() => {
        window.location.href = '../landing.html';
    }, 1000)
});
facebook.addEventListener('click', function () {
    setTimeout(() => {
        window.location.href = 'https://es-la.facebook.com/prodesing.ltda';
    }, 1000)
});

gmail.addEventListener('click', function () {
    setTimeout(() => {
        window.location.href = 'https://outlook.office.com/mail/deeplink/compose?mailtouri=mailto%3Aproyectos%40prodesing.co';
    }, 1000)
});
whatsapp.addEventListener('click', function () {
    setTimeout(() => {
        window.location.href = 'https://api.whatsapp.com/send/?phone=573178165733&text=Hola%2C+quiero+recibir+más+información+para+mi+proyecto+.&type=phone_number&app_absent=0';
    }, 1000)
});
instagram.addEventListener('click', function () {
    setTimeout(() => {
        window.location.href = 'https://www.instagram.com/prodesing/';
    }, 1000)
});


window.addEventListener('load', mostrarAnchoPantalla);
window.addEventListener('resize', mostrarAnchoPantalla);

window.addEventListener('scroll', function () {
    posicionBtn = landing.getBoundingClientRect().top;
    console.log(posicionBtn);
    if (anchoPantalla >= viewPc) {
        if (posicionBtn < 900) return addClass();
        removeClass();
    }
    if (anchoPantalla <= viewTablet && anchoPantalla > viewMovil) {
        if (posicionBtn < 500) return addClass();
        removeClass();
    }
    if (anchoPantalla <= viewMovil) {
        if (posicionBtn < 450) return addClass();
        removeClass();
    }
});

function mostrarAnchoPantalla() {
    anchoPantalla = window.innerWidth;
}

function addClass() {
    landingIcon.classList.add("animate__shakeX")
    instagramIcon.classList.add("animate__shakeX")
    whatsappIcon.classList.add("animate__shakeX")
    facebookIcon.classList.add("animate__shakeX")
    gmailIcon.classList.add("animate__shakeX")
}
function removeClass() {
    landingIcon.classList.remove("animate__shakeX")
    instagramIcon.classList.remove("animate__shakeX")
    whatsappIcon.classList.remove("animate__shakeX")
    facebookIcon.classList.remove("animate__shakeX")
    gmailIcon.classList.remove("animate__shakeX")
}