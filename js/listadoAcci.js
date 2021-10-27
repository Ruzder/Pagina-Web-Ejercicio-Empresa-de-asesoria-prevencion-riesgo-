const formulario = document.getElementById('formulario-Acc');
const inputs = document.querySelectorAll('#formulario-Acc input');

const expresiones = {

    idAcci: /^([1-9]|[0-9][0-9]|[0-9][0-9][0-9]|[0-9][0-9][0-9][0-9]|10000)$/, // Letras, numeros, 
    fecha: /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/, // numeros guion.
    horaAcci: /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/,
    lugarAcci: /[a-zA-Z]+/, //letras, numeros,guion y guion_bajo 
    origenAcci: /[a-zA-Z]+/ //letras, numeros,guion y guion_bajo (lo deje obligatorio)
}

const campos = {
    idAcci: false,
    fecha: false,
    horaAcci: false,
    lugarAcci: false,
    origenAcci: false
        /* razonSocial:false,               listado profesional razon social */

}

/* es para comprobar el campo o imput que se esta ingresando*/
const validarFormulario = (e) => {
    switch (e.target.name) {
        case "idAcci":
            validarCampo(expresiones.idAcci, e.target, 'idAcci');
            break;
        case "fecha":
            validarCampo(expresiones.fecha, e.target, 'fecha');
            break;
        case "horaAcci":
            validarCampo(expresiones.horaAcci, e.target, 'horaAcci');
            break;
        case "lugarAcci":
            validarCampo(expresiones.lugarAcci, e.target, 'lugarAcci');
            break;
        case "origenAcci":
            validarCampo(expresiones.origenAcci, e.target, 'origenAcci');
            break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});


/* validacion para el crear asesorias  */



formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    /*  && campos.mes   campos.charNum  && campos.motivo && */
    const terminos = document.getElementById('terminos');
    if (campos.idAcci && campos.fecha && campos.horaAcci && campos.lugarAcci && campos.origenAcci) {
        formulario.reset();

        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        setTimeout(() => {
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
        }, 5000);

        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario__grupo-correcto');
        });
    } else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    }
});



/* validacion de fecha, */
function esfechavalida() {
    var fecha = document.forma.fecha.value;

    // La longitud de la fecha debe tener exactamente 10 caracteres
    if (fecha.length !== 10)
        error = true;

    // Primero verifica el patron
    if (!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(fecha))
        error = true;

    // Mediante el delimitador "/" separa dia, mes y año
    var fecha = fecha.split("/");
    var day = parseInt(fecha[0]);
    var month = parseInt(fecha[1]);
    var year = parseInt(fecha[2]);

    // Verifica que dia, mes, año, solo sean numeros
    error = (isNaN(day) || isNaN(month) || isNaN(year));

    // Lista de dias en los meses, por defecto no es año bisiesto
    var ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (month === 1 || month > 2)
        if (day > ListofDays[month - 1] || day < 0 || ListofDays[month - 1] === undefined)
            error = true;

        // Detecta si es año bisiesto y asigna a febrero 29 dias
    if (month === 2) {
        var lyear = ((!(year % 4) && year % 100) || !(year % 400));
        if (lyear === false && day >= 29)
            error = true;
        if (lyear === true && day > 29)
            error = true;
    }

    if (error === true) {
        alert("Fecha Inválida: * La Fecha debe tener el formato: dd/mm/aaaa (dia/mes/año).\n");
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        return false;

    } else
        alert("Fecha Válida\n");
    document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
    document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');

    return true;
}

/* validacion de seleccion multiple*/

function validar() {
    var nombreRazonSocial = document.getElementById('razonSocial');
    if (nombreRazonSocial.value == 0 || nombreRazonSocial.value == "") {

        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
    } else

        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
    document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
}