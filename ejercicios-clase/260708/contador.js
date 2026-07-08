// declaracion de variables

// convencion de variables revisar en IA los tipos, se refiere a como escribir el nombre de las variables segun convenciones

const contador = document.querySelector('#contador') // esto es un h2 y siempre sera un h2 que tiene un 0 pero es un h2
const mensaje = document.getElementById('mensaje')
const btnEntrada = document.getElementById('btn-entrada')
const btnSalida = document.getElementById('btn-salida')
const btnReset = document.getElementById('btn-reset')

const MAX = 10
const MIN = 0 // LUEGO VEMOS ESTO

let personas = 0 //luego lo vemos

contador.inerHTML = 5


//listeners: permite hacer un evento sobre el boton, que estara atento a cuando alguien clique

btnEntrada.addEventListener('click', incremento)
btnSalida.addEventListener('click', decremento)
btnReset.addEventListener('click, reset')

function incremento() {

  if (personas < MAX) {

    personas++
    contador.innerHTML = personas

    if (personas >= 7 && personas < MAX) {
      mensaje.innerHTML = 'Casi lleno'
      mensaje.classList.add('naranja')
      contador.computedStyleMap.color = 'orange'
    }
  } if (personas === MAX){
    mensaje.innerHTML = "COMPLETO"
    // mensaje.style.color ='red'
    mensaje.classList.remove('naranja')
    mensaje.classList.add('rojo')
  }

}



function decremento() {

  if (personas > MIN) {

    personas--
    contador.innerHTML = personas
    if (personas >= 7 && personas < MAX){
      mensaje.INNERhtml = 'CASI LLENO'
      mensaje.classList.add('naranja')
      contador.style.color ='orange'
    }
    else {
      mensaje.classList.remove('naranja')
      mensaje.innerHTML = ''
      contador.style.color = 'black';
    }
  
  } 
}


function reset(){
  personas = 0
  contador.innerHTML = personas
  contador.style.color = 'black'
  mensaje.innerHTML =''
}



