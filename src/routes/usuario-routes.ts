import { Router } from "express";
import { usuarioController } from "../controllers/UsuarioController"; 

class UsuarioRoutes{
    public router:Router= Router();

    constructor(){
        this.config();
    }

    config(){
        this.router.get('/', usuarioController.getUsuario); //CONSULTAR TODOS
        this.router.get('/:id_usuario', usuarioController.getByIdUsuario); //CONSULTAR 1
        this.router.post('/', usuarioController.createUsuario); //INSERTAR
        this.router.delete('/:id_usuario', usuarioController.deleteUsuario); //ELIMINAR
        this.router.put('/:id_usuario', usuarioController.updateUsuario); //MODIFICAR
    }
} 

const usuarioRoutes =  new UsuarioRoutes();     //<-------
export default usuarioRoutes.router;  