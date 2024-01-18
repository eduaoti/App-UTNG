import { Router } from "express";
import { tipoController } from "../controllers/TipoController";


class TipoRoutes{
    public router:Router= Router();

    constructor(){
        this.config();
    }

    config(){
        this.router.get('/', tipoController.getTipo); //CONSULTAR TODOS
        this.router.get('/:id_tipo', tipoController.getByIdTipo); //CONSULTAR 1
        this.router.post('/', tipoController.createTipo); //INSERTAR
        this.router.delete('/:id_tipo', tipoController.deleteTipo); //ELIMINAR
        this.router.put('/:id_tipo', tipoController.updateTipo); //MODIFICAR
    }
} 

const tipoRoutes =  new TipoRoutes();     //<-------
export default tipoRoutes.router;  