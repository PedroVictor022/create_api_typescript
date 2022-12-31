import { response, Router } from "express";
import { SpecificationsRepository } from "../modules/cars/repositories/Specification-repository";
import { CreateSpecificationService } from "../modules/cars/services/create-specification-service";

const specificationsRoutes = Router();

const specificationsRepository = new SpecificationsRepository();

specificationsRoutes.post("/", (req, res) => {
  const { name, description } = req.body;
  const createSpecificationsService = new CreateSpecificationService(
    specificationsRepository
  );
  createSpecificationsService.execute({name, description});
  return res.status(201).send();
});

export { specificationsRoutes };
