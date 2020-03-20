var app = (function () {
    class Sala{
        constructor(name){
            this.name = name;
        }
    }
    class Jugador{
        constructor(name){
            this.name = name;
        }
    }
    var username;
    var stompClient = null;
    function crearSala(name){

    }

    var connectAndSubscribe = function () {
        console.info('Connecting to WS...');
        var socket = new SockJS('/stompendpoint');
        stompClient = Stomp.over(socket);

        stompClient.connect({}, function (frame) {
            console.log('Connected: ' + frame);
            stompClient.subscribe('/topic/created', function (eventbody) {
                var name = JSON.parse(eventbody.body).name;
                _table(name );
            });
            stompClient.subscribe('/topic/joined', function (eventbody) {
                var name = JSON.parse(eventbody.body).name;
                _table(name );
            });
            stompClient.subscribe('/topic/error', function (message) {
                var error = JSON.parse(message.body);
                alert(error);
            });
        });
    };

    return{

        connect: function () {
            if (stompClient !== null) {
                stompClient.disconnect();
            }
            username = document.getElementById("username").value;
            connectAndSubscribe();
        }
    }
})();