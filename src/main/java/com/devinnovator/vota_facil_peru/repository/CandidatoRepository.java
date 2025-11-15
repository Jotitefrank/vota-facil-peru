package com.devinnovator.vota_facil_peru.repository;

import com.devinnovator.vota_facil_peru.entity.Candidato;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CandidatoRepository extends JpaRepository<Candidato, Long> {
}