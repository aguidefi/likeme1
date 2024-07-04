import pg from 'pg';

const pool = new pg.Pool({
  host: 'localhost',
  user: 'postgres',
  password: '123456',
  database: 'likeme',
  allowExitOnIdle: true
})

pool.query('SELECT NOW()',(err,res)=> {
  if (err) {
    console.log('Error conectando DB:', err);
  } else {
    console.log('DB conectada', res.rows[0].now)
  }
})

export default pool;