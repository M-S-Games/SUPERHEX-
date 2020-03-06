package edu.eci.superhex.persistence.mybatisimpl.mappers;

import edu.eci.superhex.model.Partida;

import java.util.List;

public interface PartidaMapper {

    /**
     * Consulta todas las reservas activas
     * @return todas las reservas
     */
    List<Partida> consultarPartidas();
}
