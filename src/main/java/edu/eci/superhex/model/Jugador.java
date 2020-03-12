package edu.eci.superhex.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Jugador {
    @Id
    private String nombre;

    public Jugador(String nombre){
        this.nombre = nombre;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}