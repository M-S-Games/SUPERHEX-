var input = document.getElementById("text");
var boton1 = document.getElementById("botonArriba");
var boton2 = document.getElementById("botonAbajo");
var load = document.getElementById("load-dots");
var texto = document.getElementById("info");
var clock =  document.getElementById("clock");

function mostrarInicial() {
    load.style.display = "none";
    clock.style.display = "none";
    input.placeholder = "Username";
    input.value = ""
    input.style.display = "block"
    texto.innerText = "Crea o unete a una sala."
    boton1.style.display = "block"
    boton1.innerText = "Create Room"
    boton1.setAttribute("onclick","app.connectCreate()");
    boton2.style.display = "none"
}

function mostrarCreate() {
    input.placeholder = "Nombre Sala";
    input.value = ""
    boton1.innerText = "Create"
    boton1.setAttribute("onclick","app.crearSala(text.value)");
    boton2.innerText = "Back"
    boton2.style.display = "block"
    boton2.setAttribute("onclick","mostrarInicial()");
}

function mostrarUnido() {
    input.style.display = "none"
    boton1.style.display = "none"
    texto.innerText = "Esperando nuevos jugadores..."
    boton2.style.display = "block"
    boton2.innerText = "exit"
    boton2.setAttribute("onclick","app.salirSala()");
}

function _tableJugadores(data){
    var tabla = document.getElementById("tablaSalas");
    tabla.style.display = "none";
    var tabla = document.getElementById("tablaJugadores");
    tabla.style.display = "block";
    toastr["success"]("Alguien más se ha unido a la sala.","¡Nuevo usuario!");
    $("#jugadores").empty();
    for (var i = 0; i < data.length; i++) {
        var markup = "<tr> <td>"+ data[i].name;
        $("#jugadores").append(markup)
    }
}

function _tableSalas(data){
    var tabla = document.getElementById("tablaJugadores");
    tabla.style.display = "none"
    var tabla = document.getElementById("tablaSalas");
    tabla.style.display = "block";
    $("#salas").empty();
    for (var i = 0; i < data.length; i++) {
        var markup = "<tr onclick=app.join(this)> <td>"+ data[i].name +"</td> <td>"+ data[i].players;
        $("#salas").append(markup);
    }
}