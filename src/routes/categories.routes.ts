import { Router } from 'express';
import { Category } from '../modules/cars/model/Category';
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';







const categoriesRoutes = Router();

const categories: Category[] = [];

const categoriesRepository = new CategoriesRepository();
categoriesRoutes.post('/', (request, response) => {

    const { name, description } = request.body;

  
    const category = categoriesRepository.create({name,description})

    return response.status(200).json({ msg: 'ok', category })

})



categoriesRoutes.get('/')

export { categoriesRoutes };
