package com.devinnovator.vota_facil_peru.controller;

import com.devinnovator.vota_facil_peru.entity.InformacionElector;
import com.devinnovator.vota_facil_peru.service.InformacionElectorService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/electores")
@RequiredArgsConstructor
public class InformacionElectorController {
    private final InformacionElectorService service;

    @GetMapping
    public List<InformacionElector> getAll() {
        return service.findAll();
    }

    @PostMapping
    public InformacionElector create(@RequestBody InformacionElector info) {
        return service.save(info);
    }
}