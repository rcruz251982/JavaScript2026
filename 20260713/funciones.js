

// paso1: pal1 vocales en mayuscula
// paso 2: pal2 todo MIN
// PASO 3: mezclamos, lo que sobra lo añadimos
// paso 4: añadimos numero aleatorio entre 100 y 999



function vocalesMay(palabra) {
  const vocales = 'aeiouáéóíúàèòüï'
  let resultado = ''
  for (let i = 0; i < palabra.length; i++) {
    let letra = palabra[i]
    if (vocales.includes(letra.toLowerCase())) {
      resultado += letra.toUpperCase()
    } else {
      resultado += letra
    }

  }
  return resultado
}

// let prueba = vocalesMay('tigre')
// console.log(prueba)

function consonantesMIN(palabra) {

  const vocales = 'aeiouáéóíúàèòüï'
  let resultado = ''

  for (let i = 0; i < palabra.length; i++) {
    let letra = palabra[i]
    if (!vocales.includes(letra.toUpperCase())) {
      resultado += letra.toLowerCase()
    } else {
      resultado += letra
    }

  }

  return resultado

}


function mezclarPalabras(palabra1, palabra2){
  let resultado = ''
  let laMasLarga = Math.max(palabra1.length, palabra2.length)
  for (let i=0; i < laMasLarga; i++){
    if(i < palabra1.length){
      resultado += palabra1[i]
    }
    if(i < palabra2.length){
      resultado += palabra2[i]
    }
  }
  return resultado
}

// let mezcla = mezclarPalabras('patata', 'roja')
// console.log(mezcla)

function numeroAleatorio(){
  return Math.floor(Math.random()*900)+100
}

function generarContra(pal1,pal2){
  const p1 = vocalesMay(pal1)
  const p2 = consonantesMIN(pal2)
  let contraseña = mezclarPalabras(p1, p2)
  contraseña += numeroAleatorio()
  return contraseña
}

let fin = console.log(generarContra('mariposa', 'TIGRE'))


// acabar de coger el ejercicio del github de maria.