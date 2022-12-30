import { Category } from "./Category";

interface IRequest {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findbByName(name: string): Category;
  list(): Category;
  create(name: string, description: string): void;
}

export { IRequest, ICategoriesRepository };
