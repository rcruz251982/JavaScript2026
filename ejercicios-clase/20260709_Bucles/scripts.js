// declaracion de variables y cosas del DOM

let plantaDestino = document.getElementById('planta')
const btnGo = document.getElementById('btnGo')
let recorrido = document.querySelector('.recorrido')
let plantaInicial = document.getElementById('plantaActual')

btnGo.addEventListener('click', moverAscensor)

function moverAscensor() {

  let destino = Number(plantaDestino.value)
  let plantaActual = 5

  recorrido.innerHTML = ''


  if (destino < 0 || destino > 10) {
    recorrido.innerHTML = 'LA PLANTA DEBE ESTA ENTRE 0 Y 10'
  } else if (destino > plantaActual) {
    recorrido.innerHTML = 'cerrando puertas <br>'
    recorrido.innerHTML = 'Subiendo... <br>'

    while (plantaActual <= destino) {

      recorrido.innerHTML += `Planta ${plantaActual} <br>`
      plantaActual++

    }
    recorrido.innerHTML += 'Abriendo puertas...<br>'
    recorrido.innerHTML += `Has llegado a la planta ${destino} `



  } else if (destino < plantaActual) {
    recorrido.innerHTML += 'cerrando puertas <br>'
    recorrido.innerHTML += 'Bajando... <br>'

    while (plantaActual >= destino) {

      recorrido.innerHTML += `Planta ${plantaActual} <br>`
      plantaActual--

    }
    recorrido.innerHTML += 'Abriendo puertas...<br>'
    recorrido.innerHTML += `Has llegado a la planta ${destino} `


  } else {
    recorrido.innerHTML = 'sal del ascensor'
  }

}

// Hay dos formas de concatenar texto la primera la dejo comentada, mejor la segunda
// recorrido.innerHTML = 'estas en la planta ' + plantaActual + ' y quieres ir a la planta ' + destino

// recorrido.innerHTML = `Estas en la planta ${plantaActual} y quieres ir a la planta ${destino}<br>`


