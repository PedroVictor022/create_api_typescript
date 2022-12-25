import { Router } from "express";
import { v4 as uuidV4 } from "uuid";
import { Category } from "../models/Category";
import { CategoryRepository } from "../repositories/Categories-repositories";

const categoriesRoutes = Router();

const categoriesRepository = new CategoryRepository();

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;
  
  categoriesRepository.create({ name, description });

  res.status(201).send("Category created successfully!");
});

categoriesRoutes.get("/", (req, res) => {
  const allCategories = categoriesRepository.list();

  res.status(200).json({ allCategories });
});

export { categoriesRoutes };
