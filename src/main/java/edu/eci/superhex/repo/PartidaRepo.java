package edu.eci.superhex.repo;

import edu.eci.superhex.model.Partida;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PartidaRepo extends JpaRepository<Partida, Integer> {

    @Query(value = "select count(p.ganador),p.ganador from Partida p group by p.ganador",nativeQuery = true)
    List<Object[]> findByWinner();

    @Query(value = "select count(p.etapa),p.etapa from Partida p group by p.etapa",nativeQuery = true)
    List<Object[]> findByStage();

}
