import { Specifications } from "../models/specifications";
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "./ISpecification-repository";

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specifications[];

  constructor() {
    this.specifications = [];
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specifications();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }
  findByName(name: string): Specifications {
    const specificationFind = this.specifications.find(
      (item) => item.name === name
    );
    return specificationFind;
  }
}

export { SpecificationsRepository };
