import { Router } from "express";
import { prestamoController } from "../controllers/PrestamoController"; 

class PrestamoRoutes{
    public router:Router= Router();

    constructor(){
        this.config();
    }

    config(){
        this.router.get('/', prestamoController.getPrestamo); //CONSULTAR TODOS
        this.router.get('/:id_prestamo', prestamoController.getByIdPrestamo); //CONSULTAR 1
        this.router.post('/', prestamoController.createPrestamo); //INSERTAR
        this.router.delete('/:id_prestamo', prestamoController.deletePrestamo); //ELIMINAR
        this.router.put('/:id_prestamo', prestamoController.updatePrestamo); //MODIFICAR
    }
} 

const prestamoRoutes =  new PrestamoRoutes();     //<-------
export default prestamoRoutes.router;