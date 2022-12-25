import { Category } from "../models/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CategoryRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category(); // Instance new category
    
    // Pass properties
    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    // Add new category in repository
    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }
}

export { CategoryRepository };
