// backend/server.js
const express = require('express');
const cors = require('cors');
const db = require('./db'); 

const app = express();
const PORT = 3000;

app.use(cors()); 
app.use(express.json());

// ENDPOINT 1: CALENDARIO ELECTORAL
// GET /api/v1/calendario?aplica_a=Elector
 
app.get('/api/v1/calendario', async (req, res) => {
  const { aplica_a } = req.query; 

  let query = `
    SELECT titulo, descripcion, fecha, aplica_a 
    FROM elecciones.calendario_eventos
    ORDER BY fecha ASC;
  `;
  
  const params = [];
  if (aplica_a) {
    query = `
        SELECT titulo, descripcion, fecha, aplica_a 
        FROM elecciones.calendario_eventos
        WHERE aplica_a = $1
        ORDER BY fecha ASC;
    `;
    params.push(aplica_a);
  }

  try {
    const { rows } = await db.query(query, params);
    res.json(rows);
  } catch (err) {
    console.error('Error al obtener el calendario:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});


// ENDPOINT 2: DOCUMENTACIÓN (Instrucción, Seguridad, Legal)
// GET /api/v1/documentos/Instruccion_Cedula

app.get('/api/v1/documentos/:categoria', async (req, res) => {
  const categoria = req.params.categoria; 

  const query = `
    SELECT titulo, contenido, url_pdf
    FROM elecciones.documento_informativo
    WHERE categoria = $1;
  `;
  
  try {
    const { rows } = await db.query(query, [categoria]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Documento no encontrado para esa categoría' });
    }
    res.json(rows[0]); 
  } catch (err) {
    console.error('Error al obtener la documentación:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});


// ENDPOINT 3: BÚSQUEDA DE LUGAR DE VOTACIÓN (Padrón por DNI)
// GET /api/v1/votante/12345678

app.get('/api/v1/votante/:dni', async (req, res) => {
  const dni = req.params.dni;

  const query = `
    SELECT 
        e.nombres, e.apellidos,
        cv.nombre AS centro_votacion, cv.direccion, cv.latitud, cv.longitud,
        m.codigo_mesa, m.pabellon
    FROM 
        elecciones.elector e
    JOIN 
        elecciones.mesa m ON e.mesa_id = m.id
    JOIN 
        elecciones.centro_votacion cv ON m.centro_votacion_id = cv.id
    WHERE 
        e.dni = $1;
  `;

  try {
    const { rows } = await db.query(query, [dni]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Votante no encontrado. Pruebe con el DNI de prueba: 12345678' });
    }
    res.json(rows[0]);
  } catch (err) {
    console.error('Error al buscar votante:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});


// ENDPOINT 4: PLANCHAS Y CANDIDATOS (Agrupados por Plancha)
// GET /api/v1/candidatos/plancha

app.get('/api/v1/candidatos/plancha', async (req, res) => {
  const query = `
    SELECT
        a.id AS agrupacion_id, a.nombre AS agrupacion_nombre, a.siglas, a.logo_url,
        c.nombres, c.apellidos, c.hoja_vida_url, c.foto_url
    FROM
        elecciones.candidato c
    JOIN 
        elecciones.agrupacion_politica a ON c.agrupacion_id = a.id
    JOIN
        elecciones.postulacion p ON c.id = p.candidato_id
    JOIN
        elecciones.tipo_candidatura tp ON p.tipo_candidatura_id = tp.id
    WHERE
        tp.nombre = 'Plancha Presidencial'
    ORDER BY agrupacion_id;
  `;
  try {
    const { rows } = await db.query(query);
    
    // Agrupa los resultados 

    const agrupado = rows.reduce((acc, candidato) => {
      const key = candidato.agrupacion_id;
      if (!acc[key]) {
        acc[key] = { 
          id: candidato.agrupacion_id,
          nombre: candidato.agrupacion_nombre, 
          siglas: candidato.siglas,
          logo_url: candidato.logo_url,
          candidatos: [] 
        };
      }
      acc[key].candidatos.push(candidato);
      return acc;
    }, {});

    res.json(Object.values(agrupado));
  } catch (err) {
    console.error('Error al obtener planchas presidenciales:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});


// ENDPOINT 5: PLANES DE GOBIERNO POR AGRUPACIÓN
// GET /api/v1/planes/1 (donde 1 es el ID de la agrupación)
app.get('/api/v1/planes/:agrupacionId', async (req, res) => {
  const agrupacionId = req.params.agrupacionId; 

  const query = `
    SELECT sector, contenido
    FROM elecciones.plan_gobierno
    WHERE agrupacion_id = $1
    ORDER BY sector;
  `;

  try {
    const { rows } = await db.query(query, [agrupacionId]);
    if (rows.length === 0) {
        return res.status(404).json({ error: 'Plan de gobierno no encontrado.' });
    }
    res.json(rows); 
  } catch (err) {
    console.error('Error al obtener el plan de gobierno:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});


// ----------------------------------------------------
// INICIO DEL SERVIDOR
// ----------------------------------------------------
app.listen(PORT, () => {
  console.log(`🚀 Servidor backend escuchando en http://localhost:${PORT}`);
});