const zmiana = document.getElementById('hamburger');
const linki = document.getElementById('linki');

zmiana.addEventListener('click', () => {
    linki.classList.toggle('active');
});

$('#zamow').click(function(){
    var ciasto = $('#ciasto').val();
    var herbata = $('#herbata').val();

    if(ciasto == 'Malinowe' || ciasto == 'malinowe' || ciasto == 'Czekoladowe' || ciasto == 'czekoladowe')
{

                if(herbata == 'Cay' || herbata =='cay')
                {
                    $('#zamowienie').append('<div id="wynik-zamowienia"></div>');
                    $('#wynik-zamowienia').css('margin-top', '50px');
                    $('#wynik-zamowienia').append('<h1>Twoje zamówienie zostało złożone!</h1>');
                    $('#wynik-zamowienia').append('<h3 id= wynik-ciasto></h3>');
                    $('#wynik-ciasto').text('Zamówione ciasto: ' + ciasto);
                    $('#wynik-zamowienia').append('<h3 id= wynik-herbata></h3>');
                    $('#wynik-herbata').text('Zamówiona herbata: ' + herbata);

                    $('.zamowienie-formularz').hide();
                    $('.tytul').hide();
                    $('#zamow').hide();

                    $('#zamowienie').append('<div id="reset-sterowanie"><input type="submit" value="Zamów ponownie" id="reset"></input></div>');

                
                                $('#reset').click(function(){

                                $('#wynik-zamowienia').remove();

                                $('.zamowienie-formularz').show();
                                $('.zamowienie-formularz').val('');
                                $('.tytul').show();
                                $('#zamow').show();
                                $('#reset').remove();
                            
                });
            }

            else 
            {
                $('#zamowienie').append('<div id="wynik-zamowienia"></div>');
                $('#wynik-zamowienia').css('margin-top', '50px');
                $('#wynik-zamowienia').append('<h1>Błędna nazwa herbaty, możesz zamówić tylko herbatę cay</h1>');

                $('.zamowienie-formularz').hide();
                $('.tytul').hide();
                $('#zamow').hide();

                $('#zamowienie').append('<div id="reset-sterowanie"><input type="submit" value="Zamów ponownie" id="reset"></input></div>');


                                $('#reset').click(function(){

                                $('#wynik-zamowienia').remove();

                                $('.zamowienie-formularz').show();
                                $('.zamowienie-formularz').val('');
                                $('.tytul').show();
                                $('#zamow').show();
                                $('#reset').remove();
            
});
            }

}

else 
{
    $('#zamowienie').append('<div id="wynik-zamowienia"></div>');
    $('#wynik-zamowienia').css('margin-top', '50px');
    $('#wynik-zamowienia').append('<h1>Błędna nazwa ciasta, możesz zamówić tylko ciasto czekoladowe lub malinowe</h1>');

    $('.zamowienie-formularz').hide();
    $('.tytul').hide();
    $('#zamow').hide();

    $('#zamowienie').append('<div id="reset-sterowanie"><input type="submit" value="Zamów ponownie" id="reset"></input></div>');


                $('#reset').click(function(){

                $('#wynik-zamowienia').remove();

                $('.zamowienie-formularz').show();
                $('.zamowienie-formularz').val('');
                $('.tytul').show();
                $('#zamow').show();
                $('#reset').remove();
            
});

}


    

});



