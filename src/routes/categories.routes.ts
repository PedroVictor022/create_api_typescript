import { Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { CreateCategoryService } from "../services/create-category-service";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);
  createCategoryService.execute({ name, description });

  return res.status(201).send("Create a new category");
});

categoriesRoutes.get("/", (req, res) => {
  const allCategories = categoriesRepository.list();

  return res.status(200).json(allCategories);
});

export { categoriesRoutes };
