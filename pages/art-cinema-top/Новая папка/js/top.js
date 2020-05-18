/*class name  genre  film*/
/*-dr-dramma
  -tr- triller
  -de- detective
  -yg- horror
  -mu- multfilme
  -ko- comedy
  -ka- catastrophe
  -hi- history film
  */

$('.dr').click(function(clickEvent) {
        clickEvent.preventDefault();
        $('.film').hide();
        $('.dramma').show();
    });
$('.tr').click(function(clickEvent) {
        clickEvent.preventDefault();
        $('.film').hide();
        $('.triller').show();
    });
$('.de').click(function(clickEvent) {
        clickEvent.preventDefault();
        $('.film').hide();
        $('.detective').show();
    });
$('.yg').click(function(clickEvent) {
        clickEvent.preventDefault();
        $('.film').hide();
        $('.horror').show();
    });
$('.mu').click(function(clickEvent) {
        clickEvent.preventDefault();
        $('.film').hide();
        $('.multfilme').show();
    });
$('.ko').click(function(clickEvent) {
        clickEvent.preventDefault();
        $('.film').hide();
        $('.comedy').show();
    });
$('.ka').click(function(clickEvent) {
        clickEvent.preventDefault();
        $('.film').hide();
        $('.catastrophe').show();
    });
$('.hi').click(function(clickEvent) {
        clickEvent.preventDefault();
        $('.film').hide();
        $('.history').show();
    });