var landing = document.querySelector('.landing');
var instagram = document.querySelector('.instagram');
var facebook = document.querySelector('.facebook');
var gmail = document.querySelector('.gmail');
var whatsapp = document.querySelector('.whatsapp');

landing.addEventListener('click', function() {
    window.location.href = '../landing.html';
});
facebook.addEventListener('click', function() {
    window.location.href = 'https://es-la.facebook.com/prodesing.ltda';
});

gmail.addEventListener('click', function() {
    window.location.href = 'https://outlook.office.com/mail/deeplink/compose?mailtouri=mailto%3Aproyectos%40prodesing.co';
});
whatsapp.addEventListener('click', function() {
    window.location.href = 'https://api.whatsapp.com/send/?phone=573178165733&text=Hola%2C+quiero+recibir+más+información+para+mi+proyecto+.&type=phone_number&app_absent=0';
});
instagram.addEventListener('click', function() {
    window.location.href = 'https://www.instagram.com/prodesing/';
});


