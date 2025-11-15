package com.devinnovator.vota_facil_peru.controller;

import com.devinnovator.vota_facil_peru.entity.Candidato;
import com.devinnovator.vota_facil_peru.service.CandidatoService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/candidatos")
@RequiredArgsConstructor
public class CandidatoController {
    private final CandidatoService service;

    @GetMapping
    public List<Candidato> getAll() {
        return service.findAll();
    }

    @PostMapping
    public Candidato create(@RequestBody Candidato candidato) {
        return service.save(candidato);
    }
}