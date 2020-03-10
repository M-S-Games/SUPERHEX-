package edu.eci.superhex.persistence.mappers;

import edu.eci.superhex.model.Jugador;

import java.util.List;

public interface JugadorMapper {

    /**
     * Consulta todos los jugadores
     * @return los jugadores registrados
     */
    List<Jugador> consultarJugadores();

}
