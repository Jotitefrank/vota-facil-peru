package com.devinnovator.vota_facil_peru.controller;

import com.devinnovator.vota_facil_peru.entity.InformacionMiembroMesa;
import com.devinnovator.vota_facil_peru.service.InformacionMiembroMesaService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/miembros-mesa")
@RequiredArgsConstructor
public class InformacionMiembroMesaController {
    private final InformacionMiembroMesaService service;

    @GetMapping
    public List<InformacionMiembroMesa> getAll() {
        return service.findAll();
    }

    @PostMapping
    public InformacionMiembroMesa create(@RequestBody InformacionMiembroMesa info) {
        return service.save(info);
    }
}