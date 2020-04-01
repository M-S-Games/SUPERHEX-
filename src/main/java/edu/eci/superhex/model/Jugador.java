package edu.eci.superhex.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Jugador {
    @Id
    @Column(name = "nombre")
    private String name;

    /**
     * Creador por defecto de un jugador
     */
    public Jugador(){

    }

    /**
     * Crea un jugador con un nombre dado
     * @param name nombre del jugador
     */
    public Jugador(String name){
        this.name = name;
    }

    /**
     * Devuleve el nombre de jugador
     * @return el nombre del jugador
     */
    public String getName() {
        return name;
    }

    /**
     * Asigna el nombre de un jugador
     * @param name nnuevo nombre del jugador
     */
    public void setName(String name) {
        this.name = name;
    }
}