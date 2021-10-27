$(document).ready(function() {
    jQuery.extend(jQuery.validator.messages, {
        required: "Este campo es obligatorio.",
        number: "Por favor, escribe un número entero válido.",
        equalTo: "Por favor, escribe el mismo valor de nuevo.",
        maxlength: jQuery.validator.format("Por favor, no escribas más de {0} caracteres."),
        minlength: jQuery.validator.format("Por favor, no escribas menos de {0} caracteres."),
        rangelength: jQuery.validator.format("Por favor, escribe un valor entre {0} y {1} caracteres."),
        range: jQuery.validator.format("Por favor, escribe un valor entre {0} y {1}."),
        max: jQuery.validator.format("Por favor, escribe un valor menor o igual a {0}."),
        min: jQuery.validator.format("Por favor, escribe un valor mayor o igual a {0}.")
    });
});




$(document).ready(function() {
    $('#formulario').validate();
    console.log('funcionando');
});