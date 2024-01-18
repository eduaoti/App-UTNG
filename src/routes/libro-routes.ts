import { Router } from "express";
import { libroController } from "../controllers/LibroController";


class LibroRoutes{
    public router:Router=Router();

    constructor(){
        this.config();
    }

    config(){
        this.router.get('/', libroController.getLibro); //CONSULTAR TODOS
        this.router.get('/:id_libro', libroController.getByIdLibro); //CONSULTAR 1
        this.router.post('/', libroController.createLibro); //INSERTAR
        this.router.delete('/:id_libro', libroController.deleteLibro); //ELIMINAR
        this.router.put('/:id_libro', libroController.updateLibro); //MODIFICAR
        this.router.get('/titulo/:titulo', libroController.getByTitulo); //CONSULTAR 1
        this.router.get('/autor/:autor', libroController.getByAutor); //CONSULTAR 1
        this.router.get('/nombre_tipo/:nombre_tipo', libroController.getByTipo); //CONSULTAR 1
        this.router.get('/categoria/:categoria', libroController.getByCategoria); //CONSULTAR 1
    }
}

const libroRoutes =  new LibroRoutes();     //<-------
export default libroRoutes.router;  