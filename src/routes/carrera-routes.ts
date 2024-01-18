import { Router } from "express";
import { carreraController } from "../controllers/CarreraController"; 

class CarreraRoutes{
    public router:Router= Router();

    constructor(){
        this.config();
    }
 
    config(){
        this.router.get('/', carreraController.getCarrera); //CONSULTAR TODOS
        this.router.get('/:id_carrera', carreraController.getByIdCarrera); //CONSULTAR 1
        this.router.post('/', carreraController.createCarrera); //INSERTAR
        this.router.delete('/:id_carrera', carreraController.deleteCarrera); //ELIMINAR
        this.router.put('/:id_carrera', carreraController.updateCarrera); //MODIFICAR

    }
} 

const carreraRoutes =  new CarreraRoutes();     //<-------
export default carreraRoutes.router;