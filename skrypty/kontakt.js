const zmiana = document.getElementById('hamburger');
const linki = document.getElementById('linki');

zmiana.addEventListener('click', () => {
    linki.classList.toggle('active');
})

$(function(){

$('#dane-kontaktowe').delay(500);
$('#dane-kontaktowe').fadeTo(1500, 1);

});