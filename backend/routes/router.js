import express from 'express';
import { traerPosts, agregarPosts } from '../models/queries.js';

const router = express.Router();

router.get("/posts", async (req, res) =>{
  const posts = await traerPosts();
  res.json(posts);
})

router.post("/posts", async (req, res) =>{
  const {titulo, url, descripcion} = req.body;
  await agregarPosts(titulo, url, descripcion)
  res.send("Post agregado")
})

export default router;