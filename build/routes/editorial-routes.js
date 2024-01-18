"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const EditorialController_1 = require("../controllers/EditorialController");
class EditorialRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', EditorialController_1.editorialController.getEditorial); //CONSULTAR TODOS
        this.router.get('/:id_editorial', EditorialController_1.editorialController.getByIdEditorial); //CONSULTAR 1
        this.router.post('/', EditorialController_1.editorialController.createEditorial); //INSERTAR
        this.router.delete('/:id_editorial', EditorialController_1.editorialController.deleteEditorial); //ELIMINAR
        this.router.put('/:id_editorial', EditorialController_1.editorialController.updateEditorial); //MODIFICAR
    }
}
const editorialRoutes = new EditorialRoutes(); //<-------
exports.default = editorialRoutes.router;
