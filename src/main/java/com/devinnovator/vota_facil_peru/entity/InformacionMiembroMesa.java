package com.devinnovator.vota_facil_peru.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class InformacionMiembroMesa {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String tipo; // calendario, deberes (instalación, sufragio, otros)
    @Column(length = 5000)
    private String contenido;
}