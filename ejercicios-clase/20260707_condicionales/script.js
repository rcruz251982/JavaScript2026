const x = 10
const color = x > 12 ? 'rojo' : 'azul'

//condicional terciario

//? es Entonces
// : es Sino - else -

console.log(color)

// switch: en realidad es un condicional con una sintaxi diferente.

let dia = 0

switch (dia) {

  case 1:
    console.log('lunes')
    break

  case 2:
    console.log('martes')
    break

  case 3:
    console.log('miercoles')
    break

  case 4:
    console.log('jueves')
    break

  case 5:
    console.log('viernes')
    break

  case 6:
    console.log('sabado')
    break

  case 7:
    console.log('domingo')
    break
  default:
    console.log('piensa antes de hablar')

}