import pool from '../config/db.js';

export const traerPosts = async ()=>{
  const {rows} = await pool.query("SELECT * FROM posts");
  return rows;
}

export const agregarPosts = async (titulo, img, descripcion)=>{
  const consulta = "INSERT INTO posts VALUES(DEFAULT, $1, $2, $3)";
  const datos = [titulo, img, descripcion];
  const resultado = await pool.query(consulta, datos);
  return resultado;
}

