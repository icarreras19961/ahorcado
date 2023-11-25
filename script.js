// VARIABLES
let analfabeto = document.getElementById("analfabeto");
let divSecreto = document.querySelector(".palabra-secreta");
let intento = document.querySelector(".intentos");
// console.log(intento.innerText)
let listaPalabras = [
  "hola",
  "adios",
  "patata",
  "zapato",
  "libro",
  "carta",
  "mesopotamia",
  "esdrujula",
  "lapiz",
  "agua",
  "estuche",
];
let palabraSecreta;

//EVENTOS

// Cuando elijes una letra
analfabeto.addEventListener("click", (e) => {
  console.log(e.target.innerText);
  comprobador(e);
});

//FUNCIONES
//Elije la palabra secreta que se va a utilizar
function PalabraSecreta() {
  let indexPalabraSecreta = Math.floor(Math.random() * 10);
  //   console.log(indesPalabraSecreta);
  palabraSecreta = listaPalabras[indexPalabraSecreta];
  console.log(palabraSecreta);
  cifrador(palabraSecreta);
}

//Cifrador de la palabra
function cifrador(palabraSecreta) {
  console.log(palabraSecreta.length);
  for (let i = 0; i < palabraSecreta.length; i++) {
    console.log(i);
    divSecreto.innerText += " -";
  }
}

//Comprobador
function comprobador(e) {
  let fallo = false;
  let letra = e.target.innerText;
  //Recorre palabra
  for (let i = 0; i < palabraSecreta.length; i++) {
    fallo = false;
    console.log(fallo);
    //Alaniza si esta la letra o no
    if (letra.toLowerCase() == palabraSecreta.charAt(i)) {
      divSecreto.innerText += letra;
      e.target.classList.add("acierto");
      console.log(fallo);
      break;
    } else {
      fallo = true;
      console.log(fallo);
    }
  }
  //Lo que pasa si fallo
  if (fallo) {
    intento.innerText--;

    e.target.classList.add("error");
    console.log(intento.innerText);
    if (intento.innerText <= 0) {
      console.log("has perdido");
    }
  }
}
function cronometor() {
  //Cronometro que me he copiado del otro ejercicio
  let elCrono;
  let miFecha = new Date();
  let lahora = document.getElementById("lahora");

  //Para marcar donde empieza
  miFecha.setHours(0, 0, 10, 0);

  //Inicializo el tiempo para el cronometor
  lahora.innerHTML = "00:00:10";

  function crono() {
    //Las variables equivalentes a las horas,minutos y segundos
    let horas = miFecha.getHours();
    let minutos = miFecha.getMinutes();
    let segundos = miFecha.getSeconds();

    //lo que hace que el cronometro funcione
    //si pones -= va atras y si pones += va palante
    segundos -= 1;

    //parafernalia del cronometro para alate
    if (segundos == 60) {
      segundos = 0;
      minutos += 1;
      miFecha.setMinutes(minutos);
    }
    miFecha.setSeconds(segundos);
    if (horas < 10) {
      horas = "0" + horas;
    }

    if (minutos < 10) {
      minutos = "0" + minutos;
    }
    if (segundos < 10) {
      segundos = "0" + segundos;
    }
    lahora.innerHTML = horas + ":" + minutos + ":" + segundos;

    //Cuando el contador llegue ha cero este cronometro se para
    if (segundos == 0) {
      parar();
    }
  }
  function start() {
    elCrono = setInterval(crono, 1000);
  }
  function parar() {
    clearInterval(elCrono);
  }
  function reiniciarCrono() {
    miFecha.setHours(0, 0, 10, 0);

    lahora.innerHTML = "00:00:10";
  }

  function reset() {
    setTimeout(reiniciarCrono);
  }
}
PalabraSecreta();
