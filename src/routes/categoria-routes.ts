import { Router } from "express";
import { categoriaController } from "../controllers/CategoriaController"; 

class CategoriaRoutes{
    public router:Router= Router();

    constructor(){
        this.config();
    }

    config(){
        this.router.get('/', categoriaController.getCategoria); //CONSULTAR TODOS
        this.router.get('/:id_categoria', categoriaController.getByIdCategoria); //CONSULTAR 1
        this.router.post('/', categoriaController.createCategoria); //INSERTAR
        this.router.delete('/:id_categoria', categoriaController.deleteCategoria); //ELIMINAR
        this.router.put('/:id_categoria', categoriaController.updateCategoria); //MODIFICAR
    }
} 

const categoriaRoutes =  new CategoriaRoutes();     //<-------
export default categoriaRoutes.router;  