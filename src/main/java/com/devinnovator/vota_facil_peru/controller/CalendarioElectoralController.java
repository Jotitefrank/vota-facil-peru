package com.devinnovator.vota_facil_peru.controller;

import com.devinnovator.vota_facil_peru.entity.CalendarioElectoral;
import com.devinnovator.vota_facil_peru.service.CalendarioElectoralService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/calendario")
@RequiredArgsConstructor
public class CalendarioElectoralController {
    private final CalendarioElectoralService service;

    @GetMapping
    public List<CalendarioElectoral> getAll() {
        return service.findAll();
    }

    @PostMapping
    public CalendarioElectoral create(@RequestBody CalendarioElectoral calendario) {
        return service.save(calendario);
    }
}