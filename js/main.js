const screen = document.querySelector(".atm-system__screen");
const inputCard = document.querySelector(".atm-system__card");

const Retiro = document.getElementById("102");
const Abono = document.getElementById("103");
const Transaccion = document.getElementById("104");
const Consignacion = document.getElementById("105");
const Saldo = document.getElementById("107");
const Pagos = document.getElementById("108");
const Avances = document.getElementById("109");
const Usuarios = document.getElementById("110");
const Salida = document.getElementById("110");





const keys = document.querySelector(".atm-system__input-keys");
let pin = [];
let state = "";
const reset = document.querySelector("#btn-cancel");

reset.addEventListener("click", (event) => {
  window.location.reload()
})


const validatePin = (pin_keys) => {
  if (pin_keys.toLocaleString().replaceAll(",", "") === "0000") {
    let asterico =0;
     // Convertimos el array a string y reemplazamos las , (comas) y validamos que el resultado sea igual a 0000
    console.log(pin_keys)
    screen.innerText = "Pin ingresado es correcto";
    setTimeout(() => {

      var contenido = "";
      contenido 
      screen.innerText = "Selecciona Operacion a Realizar ";
      init()
    }, 1200);

   
  } else {
    screen.innerText = "Pin ingresado es incorrecto";
    pin = [];
    setTimeout(() => {
      screen.innerText = "Ingrese su pin";
      state = "login";
    }, 1000);
  }
  }

  function init() {
 
    let elementsUL = [
        "Retiro",
        "Abono",
        "Transaccion",
        "Consignacion",
        "Saldo",
        "Pagos",
        "Avances",
        "Usuarios",
        "Salida"
    ]
 
    let ul = createUL(elementsUL);


screen.appendChild(ul);
 
}

 
function createUL(elements) {
    let ul = document.createElement("div");
    ul.setAttribute("id", "iddiv");
 
    if (elements && Array.isArray(elements)) {
        for (let index = 0; index < elements.length; index++) {
            const element = elements[index];
            let li = document.createElement("li");
            let liText = document.createTextNode(element);
            li.appendChild(liText);
            ul.appendChild(li);
        }
    }
 
    return ul;
}
 



 
keys.addEventListener("click", (event) => {
  if (event.target.id) {
    // Sí tiene id va a entrar
    // Recogemos el valor de el id y hacemos push al array pin
    if (state === "login" && pin.length <= 4) {
      pin.push(event.target.id);
      // Ejecutamos la función para validar el pin
      if (pin.length === 4) {
        // Validamos la longitud
        validatePin(pin);
      }
    }
  } else {
    console.log("Tecla sin función");
  }
});

inputCard.addEventListener("click", function () {
  screen.innerText = "Validando tarjeta...";
  setTimeout(() => {
    screen.innerText = "Ingrese su pin";
    state = "login";
  }, 2500);
});

window.addEventListener("load", () => {
  screen.innerText = "Bienvenido al ATM";
});


//Parte de los botones de la pantalla
Retiro.addEventListener("click", function () {
  screen.innerText = "Retiros........"; 
 
  function init() {
 
    let elementsUL = [
        "100.000",
        "200.000",
        "300.000",
        "400.000",
        "500.000",
        "600.000",
        "Salir",
        "Otro Valor",
        
    ]
 
    let ul = createUL(elementsUL);


screen.appendChild(ul);
 
}
init();
  });


Abono.addEventListener("click", function () {
  screen.innerText = "Abonos..."; 
   
  

});

Transaccion.addEventListener("click", function () {
  screen.innerText = "Transacciones...";

});
Consignacion.addEventListener("click", function () {
  screen.innerText = "Consiganaciones...";

});
Saldo.addEventListener("click", function () {
  screen.innerText = "Saldo...";

});
Pagos.addEventListener("click", function () {
  screen.innerText = "Pagos...";
});
Avances.addEventListener("click", function () {
  screen.innerText = "Avances...";
});
Usuarios.addEventListener("click", function () {
  screen.innerText = "Usuarios...";
});
Salida.addEventListener("click", function () {
  screen.innerText = "Salida...";
});