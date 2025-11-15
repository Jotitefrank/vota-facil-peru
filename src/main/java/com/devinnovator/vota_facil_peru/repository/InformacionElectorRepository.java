package com.devinnovator.vota_facil_peru.repository;

import com.devinnovator.vota_facil_peru.entity.InformacionElector;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InformacionElectorRepository extends JpaRepository<InformacionElector, Long> {
}