
import { Category } from "../model/Category";


interface ICreateCategoryDTO{

    name:string;
    description:string;


}


class CategoriesRepository {

    private categories:Category[];

    constructor(){
        this.categories =  [];
    }


    create({description,name}:ICreateCategoryDTO){


        const category = new Category();

        const categ = Object.assign(category,{
             name,
             description,
             created_at: new Date(),
         })
         this.categories.push(categ)


         return category;

    }




}

export { CategoriesRepository };
