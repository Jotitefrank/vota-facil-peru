package com.devinnovator.vota_facil_peru.controller;

import com.devinnovator.vota_facil_peru.dto.ElectoralData;
import com.devinnovator.vota_facil_peru.service.ScrapingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/electoral")
public class ElectoralController {

    @Autowired
    private ScrapingService scrapingService;

    @GetMapping("/onpe")
    public List<ElectoralData> getOnpeData() throws IOException {
        return scrapingService.scrapeOnpe();
    }

    @GetMapping("/jne")
    public List<ElectoralData> getJneData() throws IOException {
        return scrapingService.scrapeJne();
    }

    @GetMapping("/elcomercio")
    public List<ElectoralData> getElComercioData() throws IOException {
        return scrapingService.scrapeElComercio();
    }
}