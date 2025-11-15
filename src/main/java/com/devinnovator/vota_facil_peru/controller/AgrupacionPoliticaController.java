package com.devinnovator.vota_facil_peru.controller;

import com.devinnovator.vota_facil_peru.entity.AgrupacionPolitica;
import com.devinnovator.vota_facil_peru.service.AgrupacionPoliticaService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/agrupaciones")
@RequiredArgsConstructor
public class AgrupacionPoliticaController {
    private final AgrupacionPoliticaService service;

    @GetMapping
    public List<AgrupacionPolitica> getAll() {
        return service.findAll();
    }

    @PostMapping
    public AgrupacionPolitica create(@RequestBody AgrupacionPolitica agrupacion) {
        return service.save(agrupacion);
    }
}