package edu.eci.superhex.model;

public class Sala {
    private String name;
    private int players;
    private String date;

    /**
     * Creador por defecto de la sala
     */
    public Sala() {
    }

    /**
     * Creador de la sala con nombre y cantidad de jugadores
     * @param name nombre de la sala
     * @param players cantidad de jugadores
     */
    public Sala(String name, int players) {
        this.name = name;
        this.players = players;
    }

    /**
     * Devuelve la fecha de inicio de la sala
     * @return la fecha de inicio
     */
    public String getDate() {
        return date;
    }

    /**
     * Asigna la fecha de inicio de la sala
     * @param date la fecha de inicio
     */
    public void setDate(String date) {
        this.date = date;
    }

    /**
     * Devuelve el nombre de la sala
     * @return el nombre de la sala
     */
    public String getName() {
        return name;
    }

    /**
     * Asigna el nombre de la sala
     * @param name nombre de la sala
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * Devuelve la cantidad de jugadores de la sala
     * @return la cantidad de jugadores de la sala
     */
    public int getPlayers() {
        return players;
    }

    /**
     * Asigna el numero de jugadores de la sala
     * @param players
     */
    public void setPlayers(int players) {
        this.players = players;
    }

    /**
     * Aumenta el numero de jugadores en 1
     */
    public void addPlayer(){
        players++;
    }

    /**
     * Disminuye el numero de jugadores en 1
     */
    public void removePlayer(){
        players--;
    }
}
