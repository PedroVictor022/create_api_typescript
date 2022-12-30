import { IRequest } from "../models/IRequest";
import { CategoryRepository } from "../repositories/Categories-repositories";

class CreateCategoryService {
  constructor(private categoriesRepository: CategoryRepository) {}

  execute({ name, description }: IRequest) {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);
    if (categoryAlreadyExists) {
      throw new Error("Category alredy exists");
    }
    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };
