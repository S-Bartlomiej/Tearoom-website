const zmiana = document.getElementById('hamburger');
const linki = document.getElementById('linki');

zmiana.addEventListener('click', () => {
    linki.classList.toggle('active');
})

$(function(){

$('#zawartosc').delay(500);
$('#zawartosc').fadeTo(1500, 1);

});