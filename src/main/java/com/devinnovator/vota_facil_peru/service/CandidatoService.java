package com.devinnovator.vota_facil_peru.service;

import com.devinnovator.vota_facil_peru.entity.Candidato;
import com.devinnovator.vota_facil_peru.repository.CandidatoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CandidatoService {
    private final CandidatoRepository repository;

    public List<Candidato> findAll() {
        return repository.findAll();
    }

    public Candidato save(Candidato candidato) {
        return repository.save(candidato);
    }
}