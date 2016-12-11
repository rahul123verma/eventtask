$(function() {

    $( "#update_form" ).click(function( event ) {

        event.preventDefault();
    });

    $( "#update_form" ).on( "click", function() {
        alert(1);
    });
    $( "form" ).delegate( "#update_form", "click", function() {
        alert(1);
    });
});
