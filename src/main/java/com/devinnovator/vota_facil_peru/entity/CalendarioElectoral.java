package com.devinnovator.vota_facil_peru.entity;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDate;

@Entity
@Data
public class CalendarioElectoral {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String tipo; // elecciones, miembros de mesa, etc.
    private LocalDate fecha;
    private String descripcion;
}