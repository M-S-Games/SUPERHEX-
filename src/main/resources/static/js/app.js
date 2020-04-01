var app = (function () {
    class Sala{
        constructor(name,date){
            this.name = name;
            this.players = 0;
            this.date = date;
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

    function crearSala(name){
        var now  = new Date();
        now.setMinutes(now.getMinutes()+5);
        countdown(now.toString(),"clock","¡Ya empezo!");
        var sala = new Sala(name,now.toString());
        joinedRoom = name;
        stompClient.subscribe('/topic/created.'+name, function (message){
            var user = new Jugador(username);
            var div = document.getElementById("load-dots");
            div.style.display = "block";
            subJoin(name);
            subSalir(name);
            subStart(name);
            stompClient.unsubscribe("salaGeneral");
            stompClient.send("/app/joinroom."+joinedRoom,{},JSON.stringify(user));
            toastr["success"]("Te has ha unido","¡Bienvenido!");
            },{id:"misala"+name});
        stompClient.send("/app/newroom."+name,{},JSON.stringify(sala));
    }

    function unirseSala(name){
        var user = new Jugador(username);
        var div = document.getElementById("load-dots");
        div.style.display = "block";
        joinedRoom = name;
        getSalas(function (data) {
            countdown(data[0].date,"clock","¡Ya empezo!");
        },name);
        stompClient.unsubscribe("salaGeneral");
        subJoin(name);
        subSalir(name);
        subStart(name);
        stompClient.send("/app/joinroom."+joinedRoom,{},JSON.stringify(user));
        toastr["success"]("Te has ha unido","¡Bienvenido!");
    }

    function salirSala(){
        var user = new Jugador(username);
        stompClient.unsubscribe("joined."+joinedRoom);
        stompClient.unsubscribe("exit."+joinedRoom);
        stompClient.unsubscribe("started."+joinedRoom);
        stompClient.send("/app/exitroom."+joinedRoom,{},JSON.stringify(user));
        subCreate();
        mostrarInicial();
        getSala(joinedRoom,validarSola);
    }

    function validarNombre(data,name){
        var fail = false
        for (var i = 0; i < data.length; i++) {
            if(data[i].name == username){
                fail = true
                toastr["error"]("Ya existe un usuario con este nombre","Oops! cambia de nombre");
            }
        }
        if (!fail){
            unirseSala(name);
        }
    }

    function validarSala(data,name){
        var fail = false
        for (var i = 0; i < data.length; i++) {
            if(data[i].name == name){
                fail = true
                toastr["error"]("Ya existe una sala con este nombre.","Oops! cambia de nombre");
            }
        }
        if (!fail){
            crearSala(name);
        }
    }

    function validarSola(data,name) {
        if (data.players == 0){
            stompClient.send("/app/deleteroom."+joinedRoom,{},null);
        }
    }

    function join(el){
        var nombre = document.getElementById("text").value;
        if( nombre === null||nombre === ""){
            toastr["warning"]("El nombre de usuario no puede ser vacio","Oops! escoge tu nombre");
        }else{
            username = document.getElementById("text").value;
            var sala = $(el).find("td:first-child").text();
            getJugadores(sala,validarNombre);
        }
    }

    function empezarSala(){
        var now = new Date();
        var sala = new Sala(joinedRoom,now.toString())
        stompClient.send("/app/start."+joinedRoom,{},JSON.stringify(sala    ));
    }

    function subSalir(name){
        stompClient.subscribe('/topic/exit.'+name, function (eventbody) {
            var salas = JSON.parse(eventbody.body);
            stompClient.unsubscribe("misala"+name);
            mostrarUnido();
            _tableJugadores(salas);
            toastr["warning"]("Alguien ha salido de la sala.","¡Ohh ohh se fué!");
        },{id:"exit."+name});
    }
    function subJoin(name){
        stompClient.subscribe('/topic/joined.'+name, function (eventbody) {
            var salas = JSON.parse(eventbody.body);
            stompClient.unsubscribe("misala"+name);
            mostrarUnido();
            _tableJugadores(salas);
            toastr["success"]("Alguien más se ha unido a la sala.","¡Nuevo usuario!");
        },{id:"joined."+name});
    }
    function subCreate() {
        stompClient.subscribe('/topic/created', function (message) {
            var salas = JSON.parse(message.body);
            _tableSalas(salas);
        },{id:"salaGeneral"});
    }
    function subStart(name) {
        stompClient.subscribe('/topic/started.'+name, function (message) {
            finalizarClock();
        },{id:"started."+name});
    }

    function acabarPartida(){
        swal("La partida ha terminado", "#"+1+"\nKills: "+0);
        //mostrarInicial();
    }

    var connectAndSubscribeSala = function () {
        console.info('Connecting to WS...');
        var socket = new SockJS('/stompendpoint');
        stompClient = Stomp.over(socket);
        stompClient.connect({}, function (frame) {
            console.log('Connected: ' + frame);
            subCreate();
        });
    };

    return{
        connectCreate: function () {
            var nombre =    document.getElementById("text").value;
            if( nombre == null||nombre ==""){
                toastr["warning"]("El nombre de usuario no puede ser vacio","Oops! escoge tu nombre");
            }else{
                username = document.getElementById("text").value;
                mostrarCreate();
            }
        },
        join:join,
        connect: function () {
            if (stompClient !== null) {
                stompClient.disconnect();
            }
            connectAndSubscribeSala();
            getSalas(_tableSalas);
        },
        crearSala:function(name){
            if( name === null||name === ""){
                toastr["warning"]("El nombre de la sala no puede ser vacio","Oops! dale nombre a tu sala");
            }else{
                getSalas(validarSala,name);
            }
        },
        unirseSala:unirseSala,
        salirSala:salirSala,
        empezarSala:empezarSala,
        acabarPartida:acabarPartida
    }
})();