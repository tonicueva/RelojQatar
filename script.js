function reloj (){
    time = new Date()
    horas = time.getHours()
    minutos = time.getMinutes()
    segundos = time.getSeconds()

    if (horas >= 12){
        porcentajeHoras = horas / 12 * 360;

    }   else {
            porcentajeHoras = horas / 24 * 360
    }
    porcentajeHoras += minutos / 60 * 30
    
    porcentajeMinutos = minutos / 60 * 360

    porcentajeSegundos = segundos / 60 * 360

    document.getElementById("agujaHoras").style.transform = "rotate("+ porcentajeHoras +"deg)"
    document.getElementById("agujaMinutos").style.transform = "rotate("+ porcentajeMinutos +"deg)"
    document.getElementById("agujaSegundos").style.transform = "rotate("+ porcentajeSegundos +"deg)"
}

setInterval(reloj, 1000);


// Haciendo Temporizador

const nodoSegundos = document.getElementById('segundos')
const nodoMinutos = document.getElementById('minutos')
const nodoHoras = document.getElementById('horas')
const nodoDias = document.getElementById('dias')

const getRemainTime = deadline => {
    let now = new Date()
    let remainTime = (new Date (deadline) - now) / 1000;

    remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2)
    remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2)
    remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2)
    remainDays = Math.floor(remainTime / (3600 * 24))
    return{
        remainTime,
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays
    }
}


const countdown = (deadline, elem) => {
    const el = document.getElementById("elem")

    const timerUpdate = setInterval( () => {
        let t = getRemainTime(deadline);
        el.innerHTML = `${t.remainDays} days ${t.remainHours} hours ${t.remainMinutes} minutes ${t.remainSeconds} seconds`
    }
    )
    el.style.fontSize = "40px"
}



countdown('Nov 11 2022', 'elem')






