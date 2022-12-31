import { Router } from "express";
import { CategoryRepository } from "../modules/cars/repositories/Categories-repositories";
import { CreateCategoryService } from "../modules/cars/services/create-category-service";

const categoriesRoutes = Router();

const categoriesRepository = new CategoryRepository();

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({ name, description });

  res.status(201).send("Category created successfully!");
});

categoriesRoutes.get("/", (req, res) => {
  const allCategories = categoriesRepository.list();

  res.status(200).json({ allCategories });
});

export { categoriesRoutes };
