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
        // Calendario Electoral basado en cronograma oficial ONPE
        CalendarioElectoral cal1 = new CalendarioElectoral();
        cal1.setTipo("Elecciones Generales");
        cal1.setFecha(LocalDate.of(2026, 4, 12));
        cal1.setDescripcion("Elecciones presidenciales, vicepresidentes, senadores, diputados y parlamento andino");
        calendarioService.save(cal1);

        CalendarioElectoral cal2 = new CalendarioElectoral();
        cal2.setTipo("Proceso Electoral");
        cal2.setFecha(LocalDate.of(2025, 12, 15));
        cal2.setDescripcion("Inicio de inscripción de organizaciones políticas");
        calendarioService.save(cal2);

        CalendarioElectoral cal3 = new CalendarioElectoral();
        cal3.setTipo("Proceso Electoral");
        cal3.setFecha(LocalDate.of(2026, 1, 15));
        cal3.setDescripcion("Inicio de inscripción de candidatos");
        calendarioService.save(cal3);

        CalendarioElectoral cal4 = new CalendarioElectoral();
        cal4.setTipo("Proceso Electoral");
        cal4.setFecha(LocalDate.of(2026, 2, 15));
        cal4.setDescripcion("Cierre de inscripción de candidatos");
        calendarioService.save(cal4);

        CalendarioElectoral cal5 = new CalendarioElectoral();
        cal5.setTipo("Proceso Electoral");
        cal5.setFecha(LocalDate.of(2026, 3, 1));
        cal5.setDescripcion("Inicio de campaña electoral");
        calendarioService.save(cal5);

        CalendarioElectoral cal6 = new CalendarioElectoral();
        cal6.setTipo("Proceso Electoral");
        cal6.setFecha(LocalDate.of(2026, 4, 5));
        cal6.setDescripcion("Fin de campaña electoral - Jornada de reflexión");
        calendarioService.save(cal6);

        CalendarioElectoral cal7 = new CalendarioElectoral();
        cal7.setTipo("Miembros de Mesa");
        cal7.setFecha(LocalDate.of(2026, 3, 15));
        cal7.setDescripcion("Designación de miembros de mesa");
        calendarioService.save(cal7);

        CalendarioElectoral cal8 = new CalendarioElectoral();
        cal8.setTipo("Miembros de Mesa");
        cal8.setFecha(LocalDate.of(2026, 4, 8));
        cal8.setDescripcion("Capacitación para miembros de mesa");
        calendarioService.save(cal8);

        CalendarioElectoral cal9 = new CalendarioElectoral();
        cal9.setTipo("Miembros de Mesa");
        cal9.setFecha(LocalDate.of(2026, 4, 11));
        cal9.setDescripcion("Instalación de mesas de votación");
        calendarioService.save(cal9);

        // Agrupaciones Políticas basadas en partidos reales
        AgrupacionPolitica agr1 = new AgrupacionPolitica();
        agr1.setNombre("Fuerza Popular");
        agr1.setTipo("General");
        agr1.setPlanGobierno("Educación: Reforma educativa integral, inversión en infraestructura escolar. Salud: Fortalecimiento del sistema de salud pública, construcción de hospitales. Economía: Promoción de inversiones, reducción de pobreza. Seguridad: Lucha contra la corrupción y crimen organizado. Justicia: Reforma judicial para mayor eficiencia.");
        agrupacionService.save(agr1);

        AgrupacionPolitica agr2 = new AgrupacionPolitica();
        agr2.setNombre("Renovación Popular");
        agr2.setTipo("General");
        agr2.setPlanGobierno("Educación: Educación de calidad con enfoque en valores. Salud: Sistema de salud preventivo y eficiente. Economía: Desarrollo económico sostenible, apoyo a emprendedores. Seguridad: Seguridad ciudadana con mano dura. Familia: Protección de la familia tradicional.");
        agrupacionService.save(agr2);

        AgrupacionPolitica agr3 = new AgrupacionPolitica();
        agr3.setNombre("Alianza para el Progreso");
        agr3.setTipo("General");
        agr3.setPlanGobierno("Educación: Acceso universal a educación de calidad. Salud: Salud integral para todos. Economía: Crecimiento inclusivo, reducción de desigualdad. Seguridad: Paz social y combate a la delincuencia. Desarrollo: Infraestructura moderna.");
        agrupacionService.save(agr3);

        AgrupacionPolitica agr4 = new AgrupacionPolitica();
        agr4.setNombre("Acción Popular");
        agr4.setTipo("General");
        agr4.setPlanGobierno("Educación: Educación pública gratuita y de calidad. Salud: Sistema de salud universal. Economía: Desarrollo industrial y agrícola. Seguridad: Seguridad democrática. Instituciones: Fortalecimiento de la democracia.");
        agrupacionService.save(agr4);

        // Candidatos basados en figuras políticas reales
        Candidato can1 = new Candidato();
        can1.setNombre("Keiko Fujimori");
        can1.setCargo("Presidente");
        can1.setRegion("Nacional");
        can1.setAgrupacion(agr1);
        can1.setHojaVida("Nacida en Lima en 1975, economista de la Boston University. Líder política con amplia experiencia parlamentaria.");
        can1.setActividades("Congresista de la República 2011-2016 y 2020-2021, Presidenta del partido Fuerza Popular.");
        can1.setPropuestas("Continuidad del legado de su padre, lucha contra la corrupción, desarrollo económico con inclusión social.");
        candidatoService.save(can1);

        Candidato can2 = new Candidato();
        can2.setNombre("Martha Chávez");
        can2.setCargo("Vicepresidente");
        can2.setRegion("Nacional");
        can2.setAgrupacion(agr1);
        can2.setHojaVida("Abogada constitucionalista, exministra de Justicia. Especialista en derecho penal.");
        can2.setActividades("Ministra de Justicia 2018-2019, Presidenta del Tribunal Constitucional 2014-2015.");
        can2.setPropuestas("Reforma judicial profunda, combate a la corrupción, fortalecimiento del estado de derecho.");
        candidatoService.save(can2);

        Candidato can3 = new Candidato();
        can3.setNombre("Rafael López Aliaga");
        can3.setCargo("Presidente");
        can3.setRegion("Nacional");
        can3.setAgrupacion(agr2);
        can3.setHojaVida("Empresario y alcalde de Lima 2023-actualidad. Ingeniero civil con maestría en administración.");
        can3.setActividades("Alcalde de Lima, Presidente de la Cámara de Comercio de Lima, Líder de Renovación Popular.");
        can3.setPropuestas("Orden y progreso, lucha contra la delincuencia, desarrollo urbano sostenible.");
        candidatoService.save(can3);

        Candidato can4 = new Candidato();
        can4.setNombre("César Acuña");
        can4.setCargo("Presidente");
        can4.setRegion("Nacional");
        can4.setAgrupacion(agr3);
        can4.setHojaVida("Empresario educativo, fundador de Universidad César Vallejo. Ingeniero industrial.");
        can4.setActividades("Presidente de Alianza para el Progreso, Alcalde de Trujillo 2007-2014.");
        can4.setPropuestas("Educación accesible, desarrollo regional, inclusión social.");
        candidatoService.save(can4);

        Candidato can5 = new Candidato();
        can5.setNombre("Yonhy Lescano");
        can5.setCargo("Presidente");
        can5.setRegion("Nacional");
        can5.setAgrupacion(agr4);
        can5.setHojaVida("Médico cirujano, excongresista. Especialista en salud pública.");
        can5.setActividades("Congresista 2011-2016, Presidente del Congreso 2014-2015, Líder de Acción Popular.");
        can5.setPropuestas("Salud universal, educación gratuita, desarrollo sostenible.");
        candidatoService.save(can5);

        Candidato can6 = new Candidato();
        can6.setNombre("Martha Moyano");
        can6.setCargo("Diputado");
        can6.setRegion("Nacional");
        can6.setAgrupacion(agr1);
        can6.setHojaVida("Líder sindical, defensora de derechos laborales. Experiencia en movimientos sociales.");
        can6.setActividades("Secretaria General de Federación de Trabajadores, Congresista 2020-2021.");
        can6.setPropuestas("Protección de derechos laborales, aumento del salario mínimo, seguridad social universal.");
        candidatoService.save(can6);

        Candidato can7 = new Candidato();
        can7.setNombre("Hernando Guerra García");
        can7.setCargo("Senador");
        can7.setRegion("Nacional");
        can7.setAgrupacion(agr2);
        can7.setHojaVida("Abogado, exministro de Justicia. Especialista en derecho constitucional.");
        can7.setActividades("Ministro de Justicia 2019-2020, Congresista 2016-2019.");
        can7.setPropuestas("Reforma constitucional, fortalecimiento de instituciones, lucha contra la impunidad.");
        candidatoService.save(can7);

        Candidato can8 = new Candidato();
        can8.setNombre("Susel Paredes");
        can8.setCargo("Parlamento Andino");
        can8.setRegion("Nacional");
        can8.setAgrupacion(agr3);
        can8.setHojaVida("Abogada, especialista en derecho internacional. Maestría en relaciones internacionales.");
        can8.setActividades("Representante ante organismos internacionales, Congresista 2016-2019.");
        can8.setPropuestas("Integración andina, comercio regional, protección de derechos humanos.");
        candidatoService.save(can8);

        // Información para Electores basada en ONPE
        InformacionElector infoE1 = new InformacionElector();
        infoE1.setTipo("Ubicación de votación");
        infoE1.setContenido("Consulta tu local de votación en https://eg2026.onpe.gob.pe/para-electores/elige-tu-local-de-votacion/. Ubicación aproximada: Centro Educativo Nacional, Lima. Mesa asignada según DNI.");
        infoE1.setLatitud(-12.0464);
        infoE1.setLongitud(-77.0428);
        electorService.save(infoE1);

        InformacionElector infoE2 = new InformacionElector();
        infoE2.setTipo("Instrucciones cédula");
        infoE2.setContenido("Para votar: 1. Marca con una X la opción de tu preferencia. 2. Una sola marca por lista. 3. Si te equivocas, solicita nueva cédula. 4. Deposita en la urna. Consulta el díptico de ONPE para más detalles.");
        infoE2.setLatitud(null);
        infoE2.setLongitud(null);
        electorService.save(infoE2);

        InformacionElector infoE3 = new InformacionElector();
        infoE3.setTipo("Recomendaciones seguridad");
        infoE3.setContenido("Llega temprano con DNI original. Evita aglomeraciones. No discutas política. Reporta irregularidades. Mantén distancia social. Revisa actualizaciones en sitio ONPE.");
        infoE3.setLatitud(null);
        infoE3.setLongitud(null);
        electorService.save(infoE3);

        InformacionElector infoE4 = new InformacionElector();
        infoE4.setTipo("Marco legal");
        infoE4.setContenido("Voto obligatorio 18-70 años. Regulado por Ley Orgánica de Elecciones. Universal, igual, directo, secreto. Multa S/ 22.00 por no votar. Más info en portal JNE.");
        infoE4.setLatitud(null);
        infoE4.setLongitud(null);
        electorService.save(infoE4);

        // Información para Miembros de Mesa basada en JNE y ONPE
        InformacionMiembroMesa infoM1 = new InformacionMiembroMesa();
        infoM1.setTipo("Calendario actividades");
        infoM1.setContenido("Capacitación previa según cronograma ONPE. Día de elecciones: Instalación 7:00 AM, votación 7:00 AM-5:00 PM, escrutinio posterior. Consulta portal JNE para detalles específicos.");
        mesaService.save(infoM1);

        InformacionMiembroMesa infoM2 = new InformacionMiembroMesa();
        infoM2.setTipo("Deberes de instalación");
        infoM2.setContenido("Verificar materiales electorales: urnas, cédulas, libro de actas. Preparar mesa y sillas. Asegurar limpieza y seguridad del local. Firmar acta de instalación. Seguir protocolos ONPE.");
        mesaService.save(infoM2);

        InformacionMiembroMesa infoM3 = new InformacionMiembroMesa();
        infoM3.setTipo("Deberes de sufragio");
        infoM3.setContenido("Verificar DNI de electores. Entregar cédula. Garantizar voto secreto. Marcar padrón. Resolver consultas. Mantener orden. Reportar incidentes según normas JNE.");
        mesaService.save(infoM3);

        InformacionMiembroMesa infoM4 = new InformacionMiembroMesa();
        infoM4.setTipo("Otros deberes");
        infoM4.setContenido("Mantener neutralidad. Colaborar con autoridades. Participar en escrutinio. Entregar materiales a ONPE. Reportar irregularidades al JNE. Cumplir con capacitación obligatoria.");
        mesaService.save(infoM4);
    }
}