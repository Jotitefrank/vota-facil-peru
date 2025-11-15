package com.devinnovator.vota_facil_peru.service;

import com.devinnovator.vota_facil_peru.entity.AgrupacionPolitica;
import com.devinnovator.vota_facil_peru.repository.AgrupacionPoliticaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AgrupacionPoliticaService {
    private final AgrupacionPoliticaRepository repository;

    public List<AgrupacionPolitica> findAll() {
        return repository.findAll();
    }

    public AgrupacionPolitica save(AgrupacionPolitica agrupacion) {
        return repository.save(agrupacion);
    }
}