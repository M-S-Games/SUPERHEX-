package edu.eci.superhex.services;

import edu.eci.superhex.model.Jugador;
import edu.eci.superhex.model.Sala;
import edu.eci.superhex.persistence.SuperHexCache;
import edu.eci.superhex.persistence.SuperHexPersistenceException;
import edu.eci.superhex.model.Partida;
import edu.eci.superhex.repo.JugadorRepo;
import edu.eci.superhex.repo.PartidaRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

@Service("SuperHexServices")
public class SuperHexServices {
    @Autowired
    PartidaRepo partidaRepo;

    @Autowired
    JugadorRepo jugadorRepo;

    @Autowired
    SuperHexCache cache;

    /**
     * Añade una partida
     * @param partida la aprtida para agregar
     * @throws SuperHexPersistenceException
     */
    public void addPartida(Partida partida) throws SuperHexPersistenceException {
        partidaRepo.save(partida);
        partidaRepo.flush();
    }

    /**
     * Metodo encargado de traer todas las partidas
     * @return Las partidas
     * @throws SuperHexPersistenceException
     */
    public List<Partida> getAllPartidas() throws SuperHexPersistenceException {
        return partidaRepo.findAll();
    }

    /**
     * Metodo encargado de traer todas las salas
     * @return todas las salas
     */
    public List<Sala> getSalas(){
        return cache.getSalas();
    }

    /**
     * Metodo encargado de traer una sala con determinado nombre
     * @param name nombre de la sala
     * @return la sala
     * @throws SuperHexPersistenceException
     */
    public Sala getSala(String name) throws SuperHexPersistenceException {
        return cache.getSala(name);
    }

    /**
     * Metodo encargado de traer los jugadores de una sala
     * @param name nombre de la sala
     * @return los jugdaores de la sala
     * @throws SuperHexPersistenceException
     */
    public CopyOnWriteArrayList<Jugador> getjugadoresBySala(String name) throws SuperHexPersistenceException {
        return cache.getJugadorBySala(name);
    }
}
