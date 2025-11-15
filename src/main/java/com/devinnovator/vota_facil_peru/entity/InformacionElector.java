package com.devinnovator.vota_facil_peru.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class InformacionElector {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String tipo; // ubicación votación, instrucciones, recomendaciones, marco legal
    @Column(length = 5000)
    private String contenido;
    private Double latitud; // para geolocalización
    private Double longitud;
}