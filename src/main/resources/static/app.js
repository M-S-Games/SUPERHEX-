var app = (function () {
    class Sala{
        constructor(name){
            this.name = name;
            this.players = 0;
        }
    }
    class Jugador{
        constructor(name){
            this.name = name;
        }
    }
    var username;
    var joinedRoom;
    var stompClient = null;

    function mostrarInicial() {
        input = document.getElementById("text");
        boton1 = document.getElementById("botonArriba");
        boton2 = document.getElementById("botonAbajo");
        input.placeholder = "Username";
        input.value = ""
        boton1.innerText = "Create Room"
        boton1.setAttribute("onclick","app.connectCreate()");
        boton2.innerText = "Join Room"
        boton2.setAttribute("onclick","app.connectJoin()");
    }

    function mostrarCreate() {
        input = document.getElementById("text");
        boton1 = document.getElementById("botonArriba");
        boton2 = document.getElementById("botonAbajo");
        input.placeholder = "Nombre Sala";
        input.value = ""
        boton1.innerText = "Create"
        boton1.setAttribute("onclick","app.crearSala(text.value)");
        boton2.innerText = "Back"
        boton2.setAttribute("onclick","app.mostrarInicial()");
    }

    function mostrarJoin() {
        input = document.getElementById("text");
        boton1 = document.getElementById("botonArriba");
        boton2 = document.getElementById("botonAbajo");
        input.placeholder = "Nombre Sala";
        input.value = ""
        boton1.innerText = "Join"
        boton1.setAttribute("onclick","app.unirseSala(text.value)");
        boton2.innerText = "Back"
        boton2.setAttribute("onclick","app.mostrarInicial()");
    }

    function crearSala(name){
        var sala = new Sala(name);
        stompClient.subscribe('/topic/created.'+name, function (message) {
            var user = new Jugador(username);
            joinedRoom = name;
            stompClient.subscribe('/topic/joined.'+joinedRoom, function (eventbody) {
                var salas = JSON.parse(eventbody.body);
                stompClient.unsubscribe("misala"+name);
                _tableJugadores(salas);
            },{id:"joined."+name});
            stompClient.unsubscribe("salaGeneral");
            stompClient.send("/app/joinroom."+joinedRoom,{},JSON.stringify(user));
        },{id:"misala"+name});
        stompClient.send("/app/newroom."+name,{},JSON.stringify(sala));
    }

    function unirseSala(name){
        var user = new Jugador(username);
        joinedRoom = name;
        stompClient.unsubscribe("salaGeneral");
        stompClient.subscribe('/topic/joined.'+joinedRoom, function (eventbody) {
            var salas = JSON.parse(eventbody.body);
            _tableJugadores(salas);
        },{id:"joined."+name});
        stompClient.send("/app/joinroom."+joinedRoom,{},JSON.stringify(user));
    }


    function _tableJugadores(data){
        var tabla = document.getElementById("tablaSalas");
        if (tabla.style.display = "block"){
            tabla.style.display = "none";
            var tabla = document.getElementById("tablaJugadores");
            tabla.style.display = "block";
        }
        alert("Creado");
        $("#jugadores").empty();
        for (var i = 0; i < data.length; i++) {
            var markup = "<tr> <td>"+ data[i].name;
            $("#jugadores").append(markup)

        }
    }

    function _tableSalas(data){
        var tabla = document.getElementById("tablaJugadores");
        if (tabla.style.display = "none"){
            console.log(data);
            $("#salas").empty();
            for (var i = 0; i < data.length; i++) {
                var markup = "<tr> <td>"+ data[i].name +"</td> <td>"+ data[i].players;
                $("#salas").append(markup)
            }
        }
    }

    function getSalas(){
        var url = window.location;
        var nueva = url.protocol+"//"+url.host + "/superhex/salas";
        var getPromise = $.get(nueva);
        getPromise.then(
            function(data){
                _tableSalas(data)
            },
            function(){
                console.log('error')
            }
        );
        return getPromise;
    }

    var connectAndSubscribeSala = function () {
        console.info('Connecting to WS...');
        var socket = new SockJS('/stompendpoint');
        stompClient = Stomp.over(socket);
        stompClient.connect({}, function (frame) {
            console.log('Connected: ' + frame);
            stompClient.subscribe('/topic/created', function (message) {
                var salas = JSON.parse(message.body);
                _tableSalas(salas);
            },{id:"salaGeneral"});
        });
    };

    return{
        connectCreate: function () {
            username = document.getElementById("text").value;
            mostrarCreate();
        },
        connectJoin: function () {
            username = document.getElementById("text").value;
            mostrarJoin();
        },
        connect: function () {
            if (stompClient !== null) {
                stompClient.disconnect();
            }
            connectAndSubscribeSala();
            getSalas();
        },
        crearSala:crearSala,
        unirseSala:unirseSala,
        mostrarInicial:mostrarInicial,
    }
})();