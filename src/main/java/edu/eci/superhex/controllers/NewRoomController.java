package edu.eci.superhex.controllers;

import edu.eci.superhex.model.Jugador;
import edu.eci.superhex.model.Sala;
import edu.eci.superhex.persistence.SuperHexCache;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArrayList;

@Controller
public class NewRoomController {

    @Autowired
    SimpMessagingTemplate msgt;

    @Autowired
    SuperHexCache cache;

    @MessageMapping("/newroom.{name}")
    public void handleCreateRoom(Sala room,@DestinationVariable String name) throws Exception {
        System.out.println("Nuevo punto recibido en el servidor!: "+room);
        if(!cache.existeSala(name)){
            cache.addSala(name,room);
            cache.crearJugadores(name);
        }else{
            msgt.convertAndSend("/topic/error"+"Sala ya existe");
        }
        msgt.convertAndSend("/topic/created",cache.getSalas());
    }
    @MessageMapping("/joinroom.{name}")
    public void handleJoinRoom(Jugador player,@DestinationVariable String name) throws Exception {
        System.out.println("Nuevo punto recibido en el servidor!: "+player);
        if(cache.existeSala(name)){
            Sala s = cache.getSala(name);
            s.addPlayer();
            cache.addPlayer(name,player);
        }else{
            msgt.convertAndSend("/topic/error"+"No existe sala");
        }
        msgt.convertAndSend("/topic/joined",cache.getJugadorBySala(name) );
    }
}