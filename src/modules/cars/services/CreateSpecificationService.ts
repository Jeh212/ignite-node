import { ISpecificationRepository } from "../repositories/ISpecificationRepository";


interface IRequest{
    name:string;
    description:string;
}

class CreateSpecificationService{


    constructor(private speficationRespository: ISpecificationRepository){

    }


    execute({name,description}:IRequest){

        const findIfExist = this.speficationRespository.findByName(name);

        if(findIfExist){
            throw new Error("Specification already exists") 
        }

        const result = this.speficationRespository.create({
            name,
            description
        });
        return result
    };


}

export { CreateSpecificationService };
