import { Router } from "express";
import { v4 as uuidV4 } from "uuid";
import { CategoryRepository } from "../repositories/Categories-repositories";
import { CreateCategoryService } from "../services/create-category-service";

const categoriesRoutes = Router();

const categoriesRepository = new CategoryRepository();

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;
  const createCategoryService = new CreateCategoryService(categoriesRepository);
  createCategoryService.execute({ name, description });

  // const nameAlready = categoriesRepository.findByName(name);

  // if (nameAlready) {
  //   return res.status(400).json({ error: "Category already exists!" });
  // }

  categoriesRepository.create({ name, description });

  res.status(201).send("Category created successfully!");
});

categoriesRoutes.get("/", (req, res) => {
  const allCategories = categoriesRepository.list();

  res.status(200).json({ allCategories });
});

export { categoriesRoutes };
