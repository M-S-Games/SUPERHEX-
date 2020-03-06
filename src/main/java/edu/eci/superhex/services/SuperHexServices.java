package edu.eci.superhex.services;

import edu.eci.superhex.persistence.SuperHexPersistenceException;
import edu.eci.superhex.model.Partida;
import edu.eci.superhex.persistence.DaoPartida;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("SuperHexServices")
public class SuperHexServices {
    @Autowired
    @Qualifier("Partida")
    DaoPartida dp;

    /**
     * Añade una partida
     * @param partida la aprtida para agregar
     * @throws SuperHexPersistenceException
     */
    public void addPartida(Partida partida) throws SuperHexPersistenceException {
        dp.addPartida(partida);
    }

    /**
     * Metodo encargado de traer todas las partidas
     * @return Partida
     * @throws SuperHexPersistenceException
     */
    public List<Partida> getAllPartidas() throws SuperHexPersistenceException {
        return dp.consultarPartidas();
    }
}
