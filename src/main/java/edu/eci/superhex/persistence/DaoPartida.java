package edu.eci.superhex.persistence;

import edu.eci.superhex.model.Jugador;
import edu.eci.superhex.model.Partida;

import java.sql.Timestamp;
import java.util.List;


public interface DaoPartida {

    /**
     *
     * @param etapa etapa de la partida
     * @param fechaIni fecha inicio de la partida
     * @param fechaFin fecha fin de la partida
     * @param ganador jugador que gano la partida
     * @throws SuperHexPersistenceException
     */
    void registarPartida(int etapa, Timestamp fechaIni, Timestamp fechaFin, Jugador ganador) throws SuperHexPersistenceException;

    /**
     * Añade una partida dada
     * @param partida la partida a agregar
     */
    void addPartida(Partida partida);

    /**
     * Consulta todas las partidas existentes
     * @return Una lista con todas las partidas existentes
     * @throws SuperHexPersistenceException
     */
    List<Partida> consultarPartidas() throws SuperHexPersistenceException;;
}