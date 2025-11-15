package com.devinnovator.vota_facil_peru.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Candidato {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    private String cargo; // Presidente, Diputado, etc.
    private String region; // Nacional, Regional
    @ManyToOne
    private AgrupacionPolitica agrupacion;

    @Column(length = 5000)
    private String hojaVida;
    @Column(length = 5000)
    private String actividades;
    @Column(length = 5000)
    private String propuestas;
}