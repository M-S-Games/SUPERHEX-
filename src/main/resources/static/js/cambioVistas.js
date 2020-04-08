var input = document.getElementById("text");
var boton1 = document.getElementById("botonArriba");
var boton2 = document.getElementById("botonAbajo");
var boton3 = document.getElementById("botonRecords");
var load = document.getElementById("load-dots");
var texto = document.getElementById("info");
var texto2 = document.getElementById("info1");
var tabla1 = document.getElementById("tablaSalas");
var tabla2 = document.getElementById("tablaJugadores");
var clock =  document.getElementById("clock");
var contenedor =  document.getElementById("container");
var grafica =  document.getElementById("divGrafica");

function mostrarInicial() {
    load.style.display = "none";
    clock.style.display = "none";
    input.placeholder = "Username";
    input.value = "";
    input.style.display = "block";
    texto.innerText = "Crea o unete a una sala.";
    texto2.style.display = "block";
    texto2.innerText = "Pon tu nombre y dale click en una sala para unirte.";
    boton1.style.display = "block";
    boton1.innerText = "Create Room";
    boton1.setAttribute("onclick","app.connectCreate()");
    boton2.style.display = "none";
    tabla1.style.display = "block";
    tabla2.style.display = "none";
}

function mostrarCreate() {
    input.placeholder = "Nombre Sala";
    input.value = "";
    boton1.innerText = "Create";
    boton1.setAttribute("onclick","app.crearSala(text.value)");
    boton2.innerText = "Back";
    boton2.style.display = "block";
    boton2.setAttribute("onclick","mostrarInicial()");
}

function mostrarUnido() {
    input.style.display = "none";
    boton1.innerText = "¡Empezar YA!";
    boton1.setAttribute("onclick","app.empezarSala()");
    texto.innerText = "Esperando nuevos jugadores...";
    texto2.style.display = "none";
    boton2.style.display = "block";
    boton2.innerText = "exit";
    boton2.setAttribute("onclick","app.salirSala()");
}

function mostrarGrafica() {
    contenedor.style.display = "none";
    grafica.style.display = "block";
    boton3.innerText = "back";
    boton3.setAttribute("onclick","mostrarPrincipal()");
}

function mostrarPrincipal() {
    contenedor.style.display = "flex";
    grafica.style.display = "none";
    boton3.innerText = "Ver estadisticas";
    boton3.setAttribute("onclick","graph.graficar()");
}

function _tableJugadores(data){
    var tabla = document.getElementById("tablaSalas");
    tabla.style.display = "none";
    var tabla = document.getElementById("tablaJugadores");
    tabla.style.display = "block";
    $("#jugadores").empty();
    for (var i = 0; i < data.length; i++) {
        var markup = "<tr> <td>"+ data[i].name;
        $("#jugadores").append(markup);
    }
}

function _tableSalas(data){
    var tabla = document.getElementById("tablaJugadores");
    tabla.style.display = "none";
    var tabla = document.getElementById("tablaSalas");
    tabla.style.display = "block";
    $("#salas").empty();
    for (var i = 0; i < data.length; i++) {
        var markup = "<tr onclick=app.join(this)> <td>"+ data[i].name +"</td> <td>"+ data[i].players;
        $("#salas").append(markup);
    }
}