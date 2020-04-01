package edu.eci.superhex.persistence;

import edu.eci.superhex.model.Jugador;
import edu.eci.superhex.model.Sala;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.atomic.AtomicInteger;

@Service
public class SuperHexCache {
    private ConcurrentHashMap<String, Sala> salas = new ConcurrentHashMap<>();
    private ConcurrentHashMap<String, CopyOnWriteArrayList<Jugador>> jugadores = new ConcurrentHashMap<>();
    private AtomicInteger numJugadores = new AtomicInteger(0);

    /**
     * Dice si existe una sala con un nombre determinado
     * @param name nombre de la sala
     * @return un bool diciendo si la sala existe
     */
    public boolean existeSala(String name){
        return salas.containsKey(name);
    }

    /**
     * Añade una sala con un nombre determinado
     * @param name nombre de la sala
     * @param room La sala a añadir
     */
    public void addSala(String name, Sala room) {
        salas.put(name,room);
    }

    /**
     * Crea una lista de jugadores para una sala
     * @param name nombre de la sala
     */
    public void crearJugadores(String name) {
        jugadores.put(name,new CopyOnWriteArrayList<Jugador>());
    }

    /**
     * Trae una sala con un nombre dado
     * @param name nombre de la sala
     * @return la sala
     * @throws SuperHexPersistenceException
     */
    public Sala getSala(String name) throws SuperHexPersistenceException {
        if (salas.containsKey(name)){
            return salas.get(name);
        }else{
            throw new SuperHexPersistenceException(SuperHexPersistenceException.SALA_NO_EXISTE);
        }
    }

    /**
     * Agrega un jugador a una sala con el nombre dado
     * @param name nombre de la sala
     * @param player jugador a agregar
     * @throws SuperHexPersistenceException
     */
    public void addPlayer(String name, Jugador player) throws SuperHexPersistenceException {
        if (!jugadores.containsKey(name)){
            throw new SuperHexPersistenceException(SuperHexPersistenceException.SALA_NO_EXISTE);
        }
        jugadores.get(name).add(player);
    }

    /**
     * Elimina un jugador de una sala
     * @param name nombre de la sala
     * @param player jugador a eliminar
     * @throws SuperHexPersistenceException
     */
    public void removePlayer(String name,Jugador player) throws SuperHexPersistenceException {
        if (!jugadores.containsKey(name)){
            throw new SuperHexPersistenceException(SuperHexPersistenceException.SALA_NO_EXISTE);
        }
        for(Jugador j : jugadores.get(name)){
            if (j.getName().equals(player.getName())){
                jugadores.get(name).remove(j);
            }
        }
    }

    /**
     * Devuelve todas la salas creadas
     * @return las salas
     */
    public List<Sala> getSalas() {
        ArrayList lista = new ArrayList();
        for (ConcurrentHashMap.Entry<String, Sala> entry : salas.entrySet()) {
            lista.add(entry.getValue());
        }
        return lista;
    }

    /**
     * Devuelve los jugadores de una sala
     * @param name nombre de la sala
     * @return los jugadores de la sala
     * @throws SuperHexPersistenceException
     */
    public CopyOnWriteArrayList<Jugador> getJugadorBySala(String name) throws SuperHexPersistenceException {
        if (jugadores.containsKey(name)){
            return jugadores.get(name);
        }else{
            throw new SuperHexPersistenceException(SuperHexPersistenceException.SALA_NO_EXISTE);
        }
    }

    /**
     * Elimina una sala con un nombre dado
     * @param name nombre de la sala
     * @throws SuperHexPersistenceException
     */
    public void deleteSala(String name) throws SuperHexPersistenceException {
        if (!salas.containsKey(name)){
            throw new SuperHexPersistenceException(SuperHexPersistenceException.SALA_NO_EXISTE);
        }
        salas.remove(name);
        jugadores.remove(name);

    }
}
