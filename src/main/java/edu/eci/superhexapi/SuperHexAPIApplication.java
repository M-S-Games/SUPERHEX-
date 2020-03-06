package edu.eci.superhexapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"edu.eci.superhex"})
public class SuperHexAPIApplication {
    public static void main(String[] args) {
        SpringApplication.run(SuperHexAPIApplication.class, args);
    }
}
