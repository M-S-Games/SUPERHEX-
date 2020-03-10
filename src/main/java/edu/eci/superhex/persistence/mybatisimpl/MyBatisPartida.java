package edu.eci.superhex.persistence.mybatisimpl;

import edu.eci.superhex.persistence.SuperHexPersistenceException;
import edu.eci.superhex.model.Jugador;
import edu.eci.superhex.model.Partida;
import edu.eci.superhex.persistence.DaoPartida;
import edu.eci.superhex.persistence.mappers.PartidaMapper;

import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.sql.Timestamp;
import java.util.List;

@Service("Partida")
public class MyBatisPartida implements DaoPartida {
	@Resource
    PartidaMapper pm;

    @Override
    public void registarPartida(int etapa, Timestamp fechaIni, Timestamp fechaFin, Jugador ganador) throws SuperHexPersistenceException {

    }

    @Override
    public void addPartida(Partida partida) {

    }

    @Override
    public List<Partida> consultarPartidas() throws SuperHexPersistenceException {
        return pm.consultarPartidas();
    }
}
