package com.devinnovator.vota_facil_peru.service;

import com.devinnovator.vota_facil_peru.entity.InformacionMiembroMesa;
import com.devinnovator.vota_facil_peru.repository.InformacionMiembroMesaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class InformacionMiembroMesaService {
    private final InformacionMiembroMesaRepository repository;

    public List<InformacionMiembroMesa> findAll() {
        return repository.findAll();
    }

    public InformacionMiembroMesa save(InformacionMiembroMesa info) {
        return repository.save(info);
    }
}