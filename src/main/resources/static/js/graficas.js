var graph = (function() {
    function  drawWin(data) {
        var nombres  = [];
        var puntaje  = [];
        for(var i = 0 ; i < data.length && i < 5;i++){
            puntaje.push(data[i][0]);
            nombres.push(data[i][1]);
        }
        var canvas = document.getElementById("graficaUsers");
        draw(nombres,puntaje,canvas,"Top 5 usernames");
    }

    function  drawEtapas(data) {
        var etapas  = [];
        var partidas  = [];
        for(var i = 0 ; i < data.length ;i++){
            partidas.push(data[i][0]);
            etapas.push("Etapa "+data[i][1]);
        }
        var canvas = document.getElementById("graficaEtapas");
        draw(etapas,partidas,canvas,"Partidas por etapas");
    }

    function draw(labels,score,canvas,info) {
        var context = canvas.getContext("2d");
        var chart = new Chart(context, {
            type: "horizontalBar",
            data: {
                labels: labels,
                datasets: [{
                    label: "Partidas",
                    backgroundColor: "rgba(87,184,70,0.9)",
                    borderColor: "rgb(87,184,70)",
                    data: score
                }
                ]
            },
            options: {
                elements: {
                    rectangle: {
                        borderWidth: 5,
                    }
                },
                responsive: true,
                legend: {
                    position: 'right',
                    fontColor: "rgb(0,0,0)"
                },
                title: {
                    display: true,
                    text: info
                }
            }
        });
    }

    function partidasRecientes(data){
        var span = document.getElementById("stats");
        span.innerText = "y se han jugado "+data.length+" partidas la ultima semana. ¡Let's play!";
    }

    function total(data){
        var span = document.getElementById("statsGeneral");
        span.innerText = "¡Se han jugado "+data.length+" partidas en total!";
    }

    function graficar() {
        mostrarGrafica();
        getReporte(drawWin,"winners");
        getReporte(drawEtapas,"etapa");
        getReporte(partidasRecientes,"reciente");
        getReporte(total,"");
    }

    return {
        graficar:graficar
    }
})();
