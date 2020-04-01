const getRemainingTime = deadline => {
    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
        remainDays = Math.floor(remainTime / (3600 * 24));

    return {
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays,
        remainTime
    }
};
var timerUpdate;
var el;
const countdown = (deadline,elem,finalMessage) => {
    el = document.getElementById(elem);
    el.style.display = "block";

    timerUpdate = setInterval( () => {
        let t = getRemainingTime(deadline);
        el.innerHTML = `La partida empieza en: ${t.remainMinutes}:${t.remainSeconds}`;

        if(t.remainTime <= 1) {
            finalizarClock(finalMessage);
        }

    }, 1000)
};
function cancelarClock() {
    clearInterval(timerUpdate);
    el.innerHTML = "¡Ya Empezo!"
}

function finalizarClock(finalMessage) {
    clearInterval(timerUpdate);
    el.innerHTML = "¡Ya Empezo!"
    app.acabarPartida();
}