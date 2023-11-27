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
  "supercalifragilisticoespiralidoso",
];
let palabraSecreta;
let letrasCifradas;
//Pop up variables
//Perder
const envoltorio = document.getElementsByClassName("envoltorio-popup");
const volverJugar = document.getElementsByClassName("volver-a-jugar");
const cerrar = document.getElementsByClassName("cerrar-popup");
//Ganar
const envoltorioGanar = document.getElementsByClassName(
  "envoltorio-popup-ganar"
);

//EVENTOS

// Cuando elijes una letra
analfabeto.addEventListener("click", (e) => {
  console.log(e.target.innerText);
  comprobador(e);
});

//eventos del popup
cerrar[0].addEventListener("click", () => {
  envoltorio[0].style.display = "none";
});
volverJugar[0].addEventListener("click", () => {
  envoltorio[0].style.display = "none";
  location.reload();
});

//FUNCIONES
//Elije la palabra secreta que se va a utilizar
function PalabraSecreta() {
  let indexPalabraSecreta = Math.floor(Math.random() * listaPalabras.length);
  //   console.log(indesPalabraSecreta);
  palabraSecreta = listaPalabras[indexPalabraSecreta];
  console.log(palabraSecreta);
  cifrador(palabraSecreta);
}

//Cifrador de la palabra
function cifrador(palabraSecreta) {
  letrasCifradas = [palabraSecreta.length];
  for (let i = 0; i < palabraSecreta.length; i++) {
    letrasCifradas[i] = false;
  }
}
//Comprobador
function comprobador(e) {
  let esIgual = true;
  let letrasGuardadas;
  let letra = e.target.innerText;

  //Recorre palabra
  letrasGuardadas = letrasCifradas.slice();
  for (let i = 0; i < palabraSecreta.length; i++) {
    fallo = false;
    console.log(fallo);
    //Alaniza si esta la letra o no
    if (letra.toLowerCase() == palabraSecreta.charAt(i)) {
      letrasCifradas[i] = true;
      e.target.classList.add("acierto");
    }
  }

  //Saber si he fallado o no para restar
  for (let i = 0; i < palabraSecreta.length; i++) {
    if (letrasCifradas[i] == letrasGuardadas[i]) {
      esIgual = true;
    } else {
      esIgual = false;
      break;
    }
  }

  //Lo que pasa si fallo
  console.log("letras guardadas: " + letrasGuardadas);
  console.log("letras cifradas: " + letrasCifradas);
  console.log("son iguales: " + (letrasGuardadas === letrasCifradas));
  if (esIgual) {
    intento.innerText--;
    e.target.classList.add("error");
    console.log(intento.innerText);
    if (intento.innerText <= 0) {
      console.log("has perdido");
      envoltorio[0].style.display = "block";
    }
  }
  escribidor();
  // console.log(divSecreto.innerHTML);
  if (divSecreto.innerHTML == palabraSecreta) {
    console.log("Has ganado");
    envoltorioGanar[0].style.display = "block";
  }
}

function escribidor() {
  console.log(letrasCifradas);
  divSecreto.innerText = "";
  for (let i = 0; i < palabraSecreta.length; i++) {
    if (letrasCifradas[i]) {
      divSecreto.innerText += palabraSecreta[i];
    } else {
      divSecreto.innerText += "-";
    }
  }
}

function cronometor() {
  //VARIABLES DEL CRONOMETRO
  let start = document.getElementById("start");
  let stop = document.getElementById("stop");
  let reset = document.getElementById("reset");
  let lahora = document.getElementById("lahora");
  let miFecha = new Date();
  miFecha.setHours(0, 0, 0, 0);
  let elCrono;
  lahora.innerHTML = "00" + ":" + "00" + ":" + "00";

  //EVENTOS DEL CRONOMETRO
  start.addEventListener("click", (e) => {
    elCrono = setInterval(crono, 1000);
  });
  stop.addEventListener("click", (e) => {
    parar();
  });
  reset.addEventListener("click", (e) => {
    reset();
  });

  //FUNCIONES DEL CRONOMETRO
  function crono() {
    let horas = miFecha.getHours();
    let minutos = miFecha.getMinutes();
    let segundos = miFecha.getSeconds();

    segundos += 1;

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
  }

  function parar() {
    clearInterval(elCrono);
  }

  //Con esto puesto no va sin el si
  // function reiniciarCrono() {
  //   miFecha.setHours(0, 0, 0, 0);
  //   lahora.innerHTML = "00:00:00";
  // }

  // function reset() {
  //   setTimeout(reiniciarCrono);
  // }
}
cronometor();
PalabraSecreta();
escribidor();
