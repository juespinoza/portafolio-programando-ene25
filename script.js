let botonTrabajos = document.getElementById("trabajos");
// console.log(botonTrabajos);

let parrafos = document.getElementsByTagName("p");
// console.log(parrafos);

let footer = document.getElementsByTagName("footer");
// console.log(footer);

if (botonTrabajos) {
  botonTrabajos.addEventListener("click", function () {
    window.alert("Click en el boton trabajos");
  });
}

// Capturar el evento del envio del formulario
// 1ro: guardar el elemento formulario en una variable
const formularioContacto = document.getElementById("contact-form");
const submitButton = document.getElementById("contact-submit");

function submitContactEvent(e) {
  // prevenir el comportamiento por defecto del evento submit
  e.preventDefault();
  // ejecucion del bloque
  console.log("formulario enviado");
  // validacion de datos
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const telefono = document.getElementById("telefono").value;

  // que se completen todos los inputs
  if (nombre && email && telefono) {
    console.log("Datos completos: ", nombre + ", " + email + ", " + telefono);
  } else {
    window.alert("Datos incompletos");
  }

  // numerico y tenga 10 digitos
  const telefonoNumerico = /^(021|098)([0-9]{6}|[0-9]{7})$/;
  if (telefonoNumerico.test(telefono)) {
    console.log("telefono es numerico y tiene 10 caracteres");
  } else {
    window.alert("telefono incorrecto");
  }

  // nombre sea texto y tenga minimo 3 caracteres
}

if (formularioContacto) {
  formularioContacto.addEventListener("submit", submitContactEvent);
}
if (submitButton) {
  submitButton.addEventListener("click", submitContactEvent);
}

// // Ejemplo de Objeto en JS:
// // declaracion + inicializacion
// const gato = {
//   nombre: "Luna",
//   raza: "mestizo",
//   color: "blanco y marron",
//   peso: 2.5,
//   jugueteFav: "raton de plastico",
//   maullar: function () {
//     console.log("miiiiiau");
//   },
//   jugarConJugueteFav: function () {
//     console.log(
//       `${this.nombre} esta jugando con su juguete favorito, ${this.jugueteFav}`
//     );
//   },
// };

// // acceso a las propiedades de mi objeto
// // console.log("Nombre", gato.nombre);
// // console.log("Peso", gato.peso);
// // console.log("Raza", gato["raza"]);
// // // acceso a los métodos de mi objeto
// // console.log(">>", gato.jugarConJugueteFav());

// // Clase
// class Persona {
//     constructor(nombre, apellido, edad = 0) {
//       this.nombre = nombre;
//       this.apellido = apellido;
//       this.edad = edad;
//     }

//   nombreCompleto() {
//     return this.nombre + " " + this.apellido;
//   }

//   saludar() {
//     console.log(`Hola, me llamo ${this.nombreCompleto()}...`);
//   }
// }

// // Crear una Persona es crear una instancia de la clase Persona, objeto de la clase Persona.
// let eduardo = new Persona();
// eduardo.nombre = "Eduardo";
// eduardo.apellido = "Apellido";
// console.log("Nombre completo: ", eduardo.nombreCompleto());
// console.log("Edad: ", eduardo.edad);
// console.log(">> ", eduardo.saludar());
// eduardo.edad = 20;
// console.log("Edad: ", eduardo.edad);

// // setTimeout
// // operaciones sincronicas
// console.log("inicio", new Date());
// // operacion Asincronica: setTimeout(funcionCallback, milisegundos)
// setTimeout(() => console.log("medio 1", new Date()), 5000);
// setTimeout(() => setTimeout(console.log("medio 2", new Date()), 6000), 3000);
// setTimeout(() => console.log("medio 3", new Date()), 10000);
// // operacion sincronica
// console.log("fin", new Date());

// fetch
// console.log("inicio", new Date());
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => response.json())
//   .then((data) => console.log(data, new Date()))
//   .catch((error) => console.log(error, new Date()));
// console.log("fin", new Date());

const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = "Hola";
    if (result) {
      resolve({ msg: "Resuelto", data: result });
    } else {
      reject("Rechazado");
    }
  }, 3000);
});

// console.log("miPromesa", miPromesa);
// miPromesa
//   .then((respuesta) => {
//     console.log(
//       `La data de mi promesa es ${respuesta.data}. Y el mensaje de resolucion fue: ${respuesta.msg}`
//     );
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// async function manejarMyPromesa() {
//   try {
//     const respuesta = await miPromesa;
//     console.log("respuesta:", respuesta);
//   } catch (error) {
//     console.log("error:", error);
//   }
// }
// manejarMyPromesa();
