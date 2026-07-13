function fecha(){
  console.log(new Date())
}

fecha()

function saludar(nombre){
  console.log(`hola ${nombre}`)
}

saludar('javier')

function sumaInutil(){
  let a = 2
  let b = 3
  console.log (a+b)
  // document.write(a+b)
}

sumaInutil()

function suma(a,b){
  console.log(a+b)
    console.log('esta suma da ' + (a+b))

}

suma(4,3)

// Return: dentro de una funcion. devuelve valores y es necesario declarar una variable nueva para que se guarden los valores


function sumaTop(c,d){
  return c+d;
}

let salida = sumaTop(20,7);
document.write(salida);


let fecha = Date.now()
console.log(fecha)