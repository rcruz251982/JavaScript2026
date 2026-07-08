function comprobarEdad() {

  let edadDisco = Number(document.getElementById('edadDisco').value)

  if (!edadDisco) {
    document.getElementById('disco').innerHTML = 'No has puesto la edad'
  } else if (edad <= 0) {
    document.getElementById('disco').innerHTML = 'No es una edad valida'
  }
  else if (edad <= 15) {
    document.getElementById('disco').innerHTML = 'No puedes entrar todavia'
  }
  else if (edad == 16 || edadDisco == 17){
    document.getElementById('disco').innerHTML = 'Solo acompañado'
  }
  else{
        document.getElementById('disco').innerHTML = 'Adelante'

  }
}
