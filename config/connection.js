const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',       
  host: 'localhost',         
  database: 'employeetracker_db',   
  password: 'q123',  
  port: 3001,                
});


module.exports = pool;
