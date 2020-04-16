package edu.eci.superhex;

import edu.eci.superhex.model.Jugador;
import edu.eci.superhex.model.Partida;
import edu.eci.superhex.repo.JugadorRepo;
import edu.eci.superhex.repo.PartidaRepo;
import edu.eci.superhex.services.SuperHexServices;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@DataJpaTest
public class JPATest {
    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private JugadorRepo jugadorRepository;

    @Autowired
    private PartidaRepo partidaRepository;

    @Test
    public void shouldInsertAndGetPlayer(){
        Jugador j1 = new Jugador("example");
        entityManager.persist(j1);
        entityManager.flush();
        Jugador found = jugadorRepository.getOne(j1.getName());
        assertEquals(found.getName(),j1.getName());
    }

    @Test
    public void shouldInsertAndGetPartida(){
        Timestamp hoy = Timestamp.valueOf(LocalDateTime.now());
        Jugador j1 = new Jugador("example");
        Partida p0 = new Partida(1, hoy, hoy, j1);
        entityManager.persist(p0);
        entityManager.flush();
        List<Partida> found = partidaRepository.findAll();
        assertTrue(found.contains(p0));
    }
}