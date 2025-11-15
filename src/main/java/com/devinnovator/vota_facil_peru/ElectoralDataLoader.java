package com.devinnovator.vota_facil_peru;

import com.devinnovator.vota_facil_peru.entity.*;
import com.devinnovator.vota_facil_peru.service.*;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
@RequiredArgsConstructor
public class ElectoralDataLoader implements CommandLineRunner {

    private final CalendarioElectoralService calendarioService;
    private final AgrupacionPoliticaService agrupacionService;
    private final CandidatoService candidatoService;
    private final InformacionElectorService electorService;
    private final InformacionMiembroMesaService mesaService;

    @Override
    public void run(String... args) throws Exception {
        // Calendario Electoral
        CalendarioElectoral cal1 = new CalendarioElectoral();
        cal1.setTipo("Elecciones Generales");
        cal1.setFecha(LocalDate.of(2026, 4, 12));
        cal1.setDescripcion("Elecciones presidenciales y parlamentarias");
        calendarioService.save(cal1);

        // Agrupación Política
        AgrupacionPolitica agr1 = new AgrupacionPolitica();
        agr1.setNombre("Partido Democrático");
        agr1.setTipo("General");
        agr1.setPlanGobierno("Plan para educación y salud");
        agrupacionService.save(agr1);

        // Candidato
        Candidato can1 = new Candidato();
        can1.setNombre("Juan Pérez");
        can1.setCargo("Presidente");
        can1.setRegion("Nacional");
        can1.setAgrupacion(agr1);
        can1.setHojaVida("Nacido en Lima, ingeniero");
        can1.setActividades("Trabajó en ministerio");
        can1.setPropuestas("Mejorar infraestructura");
        candidatoService.save(can1);

        // Información Elector
        InformacionElector infoE1 = new InformacionElector();
        infoE1.setTipo("Ubicación de votación");
        infoE1.setContenido("Centro Educativo XYZ, Calle 123");
        infoE1.setLatitud(-12.0464);
        infoE1.setLongitud(-77.0428);
        electorService.save(infoE1);

        // Información Miembro Mesa
        InformacionMiembroMesa infoM1 = new InformacionMiembroMesa();
        infoM1.setTipo("Deberes de instalación");
        infoM1.setContenido("Llegar 30 minutos antes, verificar materiales");
        mesaService.save(infoM1);
    }
}