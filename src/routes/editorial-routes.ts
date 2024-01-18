import { Router } from "express";
import { editorialController } from "../controllers/EditorialController";


class EditorialRoutes{
    public router:Router=Router();

    constructor(){
        this.config();
    }

    config(){
        this.router.get('/', editorialController.getEditorial); //CONSULTAR TODOS
        this.router.get('/:id_editorial', editorialController.getByIdEditorial); //CONSULTAR 1
        this.router.post('/', editorialController.createEditorial); //INSERTAR
        this.router.delete('/:id_editorial', editorialController.deleteEditorial); //ELIMINAR
        this.router.put('/:id_editorial', editorialController.updateEditorial); //MODIFICAR
    }
}

const editorialRoutes =  new EditorialRoutes();     //<-------
export default editorialRoutes.router;  