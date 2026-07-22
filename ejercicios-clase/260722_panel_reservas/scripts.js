//Declaracion de variables

const actividad = document.getElementById('actividad')
const numeroPlazas = document.getElementById('numeroPlazas')
const btnReserva = document.getElementById('btnReserva')
const mensajeReserva = document.getElementById('mensajeReserva')

let reservado = false
let plazasDisponibles = 5

//Listeners

btnReserva.addEventListener('mouseenter', () => {
    if (reservado) {
        btnReserva.textContent = ' cancelar reserva'
    } else {
        btnReserva.textContent = 'reservar'
    }
})

btnReserva.addEventListener('mouseleave', () => {
    if (reservado) {
        btnReserva.textContent = 'Reservado'
    } else {
        btnReserva.textContent = 'Disponible'
    }
})

btnReserva.addEventListener('click', () => {
    reservado = !reservado
    if (reservado) {
        plazasDisponibles--
        btnReserva.textContent = 'reservado'
        mensajeReserva.textContent = 'reserva realizada'
        mensajeReserva.classList.add('reservada')

    } else {
        plazasDisponibles++
        btnReserva.textContent = 'Disponible'
        mensajeReserva.textContent = 'reserva cancelada'
        mensajeReserva.classList.remove('reservada')

    }
    numeroPlazas.textContent = plazasDisponibles
})



