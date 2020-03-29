package edu.eci.superhex.model;

public class Sala {
    private String name;
    private int players;
    private String date;

    public Sala() {
    }

    public Sala(String name, int players) {
        this.name = name;
        this.players = players;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPlayers() {
        return players;
    }

    public void setPlayers(int players) {
        this.players = players;
    }

    public void addPlayer(){
        players++;
    }

    public void removePlayer(){
        players--;
    }
}
