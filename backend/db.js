// backend/db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: '',      
  host: 'localhost',
  database: 'elecciones', 
  password: '',
  port: 5432,
});

module.exports = {
  query: (text, params) => {
    console.log('QUERY:', text);
    return pool.query(text, params);
  },
};