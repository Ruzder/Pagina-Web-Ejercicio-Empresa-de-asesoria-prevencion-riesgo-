const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    rut: /^[0-9]{9}$/, // Letras, numeros, guion y guion_bajo
    pago: /^\d{1,8}$/, // 0 a 8 numeros.
    fecha: /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/, // numeros guion.
    idNuevaAsesoria: /^[0-9]{1,4}$/, // , numeros, guion y guion_bajo
    /* motivo: /^[a-zA-Z0-9\_\-]{1,250}$/, // Letras, numeros, guion y guion_bajo
     charNum: /^[a-zA-Z0-9\_\-]{1,250}$/, // Letras, numeros, guion y guion_bajo*/
    ano: /^(20[1-5][0-5]|2050)$/

}

const campos = {
    rut: false,
    /*mes: false,*/
    ano: true,
    pago: false,
    fecha: false,
    idNuevaAsesoria: false,
    /*motivo: false,
    charNum: false*/
}

/* es para comprobar el campo o imput que se esta ingresando*/
const validarFormulario = (e) => {
    switch (e.target.name) {
        case "rut":
            validarCampo(expresiones.rut, e.target, 'rut');
            break;
            /*case "mes":
                validarCampo(expresiones.mes, e.target, 'mes');
                break;*/
        case "ano":
            validarCampo(expresiones.ano, e.target, 'ano');
            break;
        case "pago":
            validarCampo(expresiones.pago, e.target, 'pago');
            break;
        case "fecha":
            validarCampo(expresiones.fecha, e.target, 'fecha');
            break;
        case "idNuevaAsesoria":
            validarCampo(expresiones.idNuevaAsesoria, e.target, 'idNuevaAsesoria');
            break;
            /* case "motivo":
                 validarCampo(expresiones.motivo, e.target, 'motivo');
                 break;
             case "charNum":
                 validarCampo(expresiones.charNum, e.target, 'charNum');
                 break;*/
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

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    /*  && campos.mes */
    const terminos = document.getElementById('terminos');
    if (campos.rut && campos.ano && campos.pago) {
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
/* validacion para el crear asesorias  */


/*
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    /*  && campos.mes   campos.charNum  && campos.motivo && */
/* const terminos = document.getElementById('terminos');
    if (campos.fecha && campos.idNuevaAsesoria) {
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
});*/

/*fecha año */

const d = new Date();
document.getElementById("demo").innerHTML = d.getFullYear();



/* validacion de fecha, PAGINA CREAR ASESORIA*/
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

/* validar el conteo de caracteres en sector motivacion */

function countChars(obj) {
    var maxLength = 250;
    var strLength = obj.value.length;
    var charRemain = (maxLength - strLength);

    if (charRemain < 0) {
        document.getElementById("charNum").innerHTML = '<span style="color: red;">Has superado el límite de' + maxLength + ' caracteres.</span>';
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
    } else {
        document.getElementById("charNum").innerHTML = charRemain + ' caracteres restantes';
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
    }
}