var graph = (function() {
    function  draw() {
        var canvas = document.getElementById("grafica");
        canvas.setAttribute("width","100");
        canvas.setAttribute("height","100");
        var context = canvas.getContext("2d");

        var chart = new Chart(context, {
            type: "horizontalBar",
            data: {
                labels: ["exa1", "exa2", "exa3", "exa4", "exa5"],
                datasets: [{
                    label: "Top 5 usernames",
                    backgroundColor: "rgb(0,0,0)",
                    borderColor: "rgb(50,50,50)",
                    data: [10, 8, 6, 4, 5]
                }
                ]
            }
        });
    }
    function graficar() {
        mostrarGrafica();
        draw();
    }
    return {
        graficar:graficar
    }
}())
