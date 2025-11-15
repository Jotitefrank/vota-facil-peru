package com.devinnovator.vota_facil_peru.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class AgrupacionPolitica {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    private String tipo; // General, etc.
    @Column(length = 5000)
    private String planGobierno; // por sectores
}