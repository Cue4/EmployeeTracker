const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',       
  host: 'localhost',         
  database: 'employeetracker_db',   
  password: 'q123',  
  port: 5432,                
});


module.exports = pool;
