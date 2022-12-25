import { Router } from 'express';
import { v4 as uuidV4 } from 'uuid';
import { Category } from '../models/Category';

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body;

  const category = new Category();

  // Object assing voce passa o objeto alvo e as props que ele vai receber
  Object.assign(category, {
    name, 
    description, 
    created_at: new Date()
  });

  categories.push(category)

  res.status(200).json({categories})
})

export { categoriesRoutes };