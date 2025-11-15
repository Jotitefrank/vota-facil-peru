package com.devinnovator.vota_facil_peru.service;

import com.devinnovator.vota_facil_peru.entity.InformacionElector;
import com.devinnovator.vota_facil_peru.repository.InformacionElectorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class InformacionElectorService {
    private final InformacionElectorRepository repository;

    public List<InformacionElector> findAll() {
        return repository.findAll();
    }

    public InformacionElector save(InformacionElector info) {
        return repository.save(info);
    }
}