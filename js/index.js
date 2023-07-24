var landing =document.getElementById('switcher');
var instagram = document.getElementById('switcher2');
var facebook = document.getElementById('switcher3');
var gmail = document.getElementById('switcher4');
var whatsapp = document.getElementById('switcher5');

landing.addEventListener('click', function() {
    setTimeout(() => {
        window.location.href = '../landing.html';
        landing.checked = true;
      }, 1000);
    });

facebook.addEventListener('click', function() {
    setTimeout(() => {
    window.location.href = 'https://es-la.facebook.com/prodesing.ltda';
    facebook.checked = true;
}, 1000);
});

gmail.addEventListener('click', function() {
    setTimeout(() => {
    window.location.href = 'https://outlook.office.com/mail/deeplink/compose?mailtouri=mailto%3Aproyectos%40prodesing.co';
    gmail.checked = true;
}, 1000);
});
whatsapp.addEventListener('click', function() {
    setTimeout(() => {
    window.location.href = 'https://api.whatsapp.com/send/?phone=573178165733&text=Hola%2C+quiero+recibir+más+información+para+mi+proyecto+.&type=phone_number&app_absent=0';
    whatsapp.checked = true;
}, 1000);
});
instagram.addEventListener('click', function() {
    setTimeout(() => {
    window.location.href = 'https://www.instagram.com/prodesing/';
    instagram.checked = true;
}, 1000);
});


