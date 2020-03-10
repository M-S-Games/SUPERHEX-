package edu.eci.superhex;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({"edu.eci.superhex.persistence.mappers"})
public class SuperHexAPIApplication {
    public static void main(String[] args) {
        SpringApplication.run(SuperHexAPIApplication.class, args);
    }
}
