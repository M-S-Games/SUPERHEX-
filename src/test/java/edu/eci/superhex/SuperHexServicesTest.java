package edu.eci.superhex;

import edu.eci.superhex.model.Jugador;
import edu.eci.superhex.model.Partida;
import edu.eci.superhex.persistence.SuperHexPersistenceException;
import edu.eci.superhex.repo.JugadorRepo;
import edu.eci.superhex.repo.PartidaRepo;
import edu.eci.superhex.services.SuperHexServices;
import org.junit.Before;
import org.junit.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Bean;
import org.springframework.test.context.junit4.SpringRunner;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.Assert.*;
import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
public class SuperHexServicesTest {

    @InjectMocks
    SuperHexServices service;

    @Mock
    private PartidaRepo partidaRepository;

    @Mock
    private JugadorRepo jugadorRepository;

    @Test
    public void shouldInsertandGetPartida(){
        try{
            Timestamp hoy = Timestamp.valueOf(LocalDateTime.now());
            final Jugador j1 = new Jugador("example");
            final Partida p0 = new Partida(1, hoy, hoy, j1);
            List lista = new ArrayList();
            System.out.println(partidaRepository+" "+lista);
            given(partidaRepository.findAll()).willReturn(lista);
            given(partidaRepository.save(p0)).willAnswer(invocation -> invocation.getArgument(0));
            service.addPartida(p0);
            List<Partida> found = service.getAllPartidas();
            assertTrue(found.contains(p0));
        }catch (SuperHexPersistenceException e){
            fail("Deberia pasar");
        }
    }
}