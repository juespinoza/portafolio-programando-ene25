
let botonTrabajos = document.getElementById('trabajos');
console.log(botonTrabajos);

let parrafos = document.getElementsByTagName('p');
console.log(parrafos);

let footer = document.getElementsByTagName('footer');
console.log(footer);

if (botonTrabajos) {
    botonTrabajos.addEventListener('click', function(){
        window.alert("Click en el boton trabajos");
    });
}

// Capturar el evento del envio del formulario
// 1ro: guardar el elemento formulario en una variable
const formularioContacto = document.getElementById("contact-form");
const submitButton = document.getElementById('contact-submit');

function submitContactEvent(e){
    // prevenir el comportamiento por defecto del evento submit
    e.preventDefault();
    // ejecucion del bloque
    console.log("formulario enviado");
    // validacion de datos
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;

    // que se completen todos los inputs
    if (nombre && email && telefono){
        console.log("Datos completos: ", nombre +", "+ email +", "+ telefono);
    } else {
        window.alert("Datos incompletos");
    }

    // numerico y tenga 10 digitos
    const telefonoNumerico = /^(021|098)([0-9]{6}|[0-9]{7})$/
    if(telefonoNumerico.test(telefono)){
        console.log("telefono es numerico y tiene 10 caracteres");
    } else {
        window.alert("telefono incorrecto");
    }

    // nombre sea texto y tenga minimo 3 caracteres
    

}

if(formularioContacto){
    formularioContacto.addEventListener("submit", submitContactEvent)
}
if(submitButton){
    submitButton.addEventListener("click", submitContactEvent)
}
