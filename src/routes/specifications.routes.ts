import { Router } from 'express';
import { SpecificationRepository } from '../modules/cars/repositories/SpecificationRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';




const speficiationRoutes = Router();

const specificationRepository = new SpecificationRepository();


speficiationRoutes.post("/",(request, response)=>{
    const {name,description} = request.body;
    const createSpecificationService = new CreateSpecificationService(specificationRepository);



    createSpecificationService.execute({name,description})

    return response.status(201).send();

})


export { speficiationRoutes };
