$(document).ready(function() {

    const formulario = document.getElementById('formulario');
    const inputs = document.querySelectorAll('#formulario input');

    const expresiones = {

        idAsistente: /^([1-9]|[0-9][0-9]|[0-9][0-9][0-9]|[0-9][0-9][0-9][0-9]|10000)$/, // Letras, numeros, 
        nombre: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u, // letras
        edad: /^([1-9]|[0-9][0-9]|1[0-4][0-9]|150)$/, //solo numeros
        correoElectronico: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/, //letras, numeros,guion y guion_bajo 
        telefono: /^(\+?56)?(\s?)(0?9)(\s?)[9876543]\d{7}$/ // 7 a 14 numeros.
    }

    const campos = {
        idAsistente: false,
        nombre: false,
        edad: false,
        correoElectronico: false,
        telefono: false
    }

    /* es para comprobar el campo o imput que se esta ingresando*/
    const validarFormulario = (e) => {
        switch (e.target.name) {
            case "idAsistente":
                validarCampo(expresiones.idAsistente, e.target, 'idAsistente');
                break;
            case "nombre":
                validarCampo(expresiones.nombre, e.target, 'nombre');
                break;
            case "edad":
                validarCampo(expresiones.edad, e.target, 'edad');
                break;
            case "correoElectronico":
                validarCampo(expresiones.correoElectronico, e.target, 'correoElectronico');
                break;
            case "telefono":
                validarCampo(expresiones.telefono, e.target, 'telefono');
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



    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        let valorSeleccionado = $('#capa option:selected').text();

        //const terminos = document.getElementById('terminos');
        // if (campos.idAsistente && campos.nombre && campos.edad && campos.correoElectronico && campos.telefono && campos.capacitacion) {
        //     formulario.reset();

        //     document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        //     setTimeout(() => {
        //         document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
        //     }, 5000);

        //     document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
        //         icono.classList.remove('formulario__grupo-correcto');
        //     });


        // } else {
        //     document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
        // }
        $('#insertar-dato').append(`
            <tr>
               
                <td>${valorSeleccionado}</td>
                <td>${idAsistente.value}</td>
                <td>${nombre.value}</td>
                <td>${edad.value}</td>
                <td>${correoElectronico.value}</td>
                <td>${telefono.value}</td>
            </tr>
        `);
    });
});

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