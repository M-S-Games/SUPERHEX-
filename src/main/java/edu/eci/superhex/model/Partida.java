package edu.eci.superhex.model;

import java.sql.Timestamp;

public class Partida {
    private int etapa;
    private Timestamp fechaInicio = null;
    private Timestamp fechaFin = null;
    private Jugador ganador;

    public Partida(int etapa,Timestamp fechaInicio,Timestamp fechaFin,Jugador ganador){
        this.etapa = etapa;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.ganador = ganador;
    }

    public int getEtapa() {
        return etapa;
    }

    public void setEtapa(int etapa) {
        this.etapa = etapa;
    }

    public Timestamp getFechaInicio() {
        return fechaInicio;
    }

    public void setFechaInicio(Timestamp fechaInicio) {
        this.fechaInicio = fechaInicio;
    }

    public Timestamp getFechaFin() {
        return fechaFin;
    }

    public void setFechaFin(Timestamp fechaFin) {
        this.fechaFin = fechaFin;
    }

    public Jugador getGanador() {
        return ganador;
    }

    public void setGanador(Jugador ganador) {
        this.ganador = ganador;
    }
}