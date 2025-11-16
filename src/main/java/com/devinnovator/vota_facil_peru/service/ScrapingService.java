package com.devinnovator.vota_facil_peru.service;

import com.devinnovator.vota_facil_peru.dto.ElectoralData;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Service;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class ScrapingService {

    public List<ElectoralData> scrapeOnpe() throws IOException {
        List<ElectoralData> data = new ArrayList<>();
        // Hardcoded data from the site
        data.add(createData("ONPE", "Fecha de Elecciones", "Domingo 12 de abril de 2026 de 7 a. m. a 5 p. m.", "https://eg2026.onpe.gob.pe/"));
        data.add(createData("ONPE", "Autoridades a Elegir", "Presidente, vicepresidentes, senadores, diputados y titulares del parlamento andino.", "https://eg2026.onpe.gob.pe/"));
        data.add(createData("ONPE", "Requisitos para Voto Digital", "Ser ciudadano peruano mayor de 18 años, inscrito en el padrón electoral.", "https://eg2026.onpe.gob.pe/"));
        data.add(createData("ONPE", "Distritos Electorales", "Información sobre los distritos electorales y su importancia.", "https://eg2026.onpe.gob.pe/"));
        // Add more from the site
        return data;
    }

    private ElectoralData createData(String source, String title, String content, String url) {
        ElectoralData item = new ElectoralData();
        item.setSource(source);
        item.setTitle(title);
        item.setContent(content);
        item.setUrl(url);
        return item;
    }

    public List<ElectoralData> scrapeJne() throws IOException {
        List<ElectoralData> data = new ArrayList<>();
        // Hardcoded services from the site
        data.add(createData("JNE", "Consulta de Expedientes Jurisdiccionales", "Accede a expedientes judiciales electorales.", "https://consultaexpediente.jne.gob.pe/"));
        data.add(createData("JNE", "Fact Checking", "Verifica información electoral.", "https://factchecking.jne.gob.pe/"));
        data.add(createData("JNE", "Libro de Reclamaciones", "Presenta tus quejas y reclamos.", "https://portal.jne.gob.pe/portal/Pagina/Ver/932/page/Libro-de-Reclamaciones"));
        data.add(createData("JNE", "Portal de Transparencia", "Información pública del JNE.", "https://www.transparencia.gob.pe/enlaces/pte_transparencia_enlaces.aspx?id_entidad=2022"));
        return data;
    }

    public List<ElectoralData> scrapeElComercio() throws IOException {
        List<ElectoralData> data = new ArrayList<>();
        Document doc = Jsoup.connect("https://elcomercio.pe/buscar/Electoral+/todas/descendiente/?ref=ecr").get();
        Elements articles = doc.select("h2 a, .article-title a");
        for (Element article : articles) {
            if (!article.text().trim().isEmpty()) {
                data.add(createData("El Comercio", article.text().trim(), "", article.absUrl("href")));
            }
        }
        return data;
    }
}