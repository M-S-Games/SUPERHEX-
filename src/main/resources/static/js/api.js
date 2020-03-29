function getSalas(callback,name){
    var url = window.location;
    var nueva = url.protocol+"//"+url.host + "/superhex/salas";
    var getPromise = $.get(nueva);
    getPromise.then(
        function(data){
            callback(data,name);
        },
        function(){
            console.log('error')
        }
    );
    return getPromise;
}

function getJugadores(name,callback){
    var url = window.location;
    var nueva = url.protocol+"//"+url.host + "/superhex/jugadores/"+name;
    var getPromise = $.get(nueva);
    getPromise.then(
        function(data){
            callback(data,name);
        },
        function(){
            console.log('error')
        }
    );
    return getPromise;
}

function getSala(name,callback){
    var url = window.location;
    var nueva = url.protocol+"//"+url.host + "/superhex/salas/"+name;
    var getPromise = $.get(nueva);
    getPromise.then(
        function(data){
            callback(data,name);
        },
        function(){
            console.log('error')
        }
    );
    return getPromise;
}