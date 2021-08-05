import { Specification } from "../model/Specification";
import { ICreateSpecificationDTO, ISpecificationRepository } from "./ISpecificationRepository";



class SpecificationRepository implements ISpecificationRepository{
   
   private specifications: Specification[];
   
    public create({ name, description }: ICreateSpecificationDTO): void {

        const specification = new Specification();


        Object.assign(specification,{
            name,
            description,
            created_at: new Date(),
        })

        this.specifications.push(specification)
    }


    public findByName(name:string): Specification{

        const findSpecification = this.specifications.find(
            (spec)=>{spec.name === name}
        )
            return findSpecification;
    }
}

export { SpecificationRepository };
