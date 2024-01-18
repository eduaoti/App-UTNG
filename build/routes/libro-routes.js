"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LibroController_1 = require("../controllers/LibroController");
class LibroRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', LibroController_1.libroController.getLibro); //CONSULTAR TODOS
        this.router.get('/:id_libro', LibroController_1.libroController.getByIdLibro); //CONSULTAR 1
        this.router.post('/', LibroController_1.libroController.createLibro); //INSERTAR
        this.router.delete('/:id_libro', LibroController_1.libroController.deleteLibro); //ELIMINAR
        this.router.put('/:id_libro', LibroController_1.libroController.updateLibro); //MODIFICAR
        this.router.get('/titulo/:titulo', LibroController_1.libroController.getByTitulo); //CONSULTAR 1
        this.router.get('/autor/:autor', LibroController_1.libroController.getByAutor); //CONSULTAR 1
        this.router.get('/nombre_tipo/:nombre_tipo', LibroController_1.libroController.getByTipo); //CONSULTAR 1
        this.router.get('/categoria/:categoria', LibroController_1.libroController.getByCategoria); //CONSULTAR 1
    }
}
const libroRoutes = new LibroRoutes(); //<-------
exports.default = libroRoutes.router;
