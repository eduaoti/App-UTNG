"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CategoriaController_1 = require("../controllers/CategoriaController");
class CategoriaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', CategoriaController_1.categoriaController.getCategoria); //CONSULTAR TODOS
        this.router.get('/:id_categoria', CategoriaController_1.categoriaController.getByIdCategoria); //CONSULTAR 1
        this.router.post('/', CategoriaController_1.categoriaController.createCategoria); //INSERTAR
        this.router.delete('/:id_categoria', CategoriaController_1.categoriaController.deleteCategoria); //ELIMINAR
        this.router.put('/:id_categoria', CategoriaController_1.categoriaController.updateCategoria); //MODIFICAR
    }
}
const categoriaRoutes = new CategoriaRoutes(); //<-------
exports.default = categoriaRoutes.router;
