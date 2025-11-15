package com.devinnovator.vota_facil_peru.service;

import com.devinnovator.vota_facil_peru.entity.CalendarioElectoral;
import com.devinnovator.vota_facil_peru.repository.CalendarioElectoralRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CalendarioElectoralService {
    private final CalendarioElectoralRepository repository;

    public List<CalendarioElectoral> findAll() {
        return repository.findAll();
    }

    public CalendarioElectoral save(CalendarioElectoral calendario) {
        return repository.save(calendario);
    }
}