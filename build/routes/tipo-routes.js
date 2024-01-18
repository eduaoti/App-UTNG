"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TipoController_1 = require("../controllers/TipoController");
class TipoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', TipoController_1.tipoController.getTipo); //CONSULTAR TODOS
        this.router.get('/:id_tipo', TipoController_1.tipoController.getByIdTipo); //CONSULTAR 1
        this.router.post('/', TipoController_1.tipoController.createTipo); //INSERTAR
        this.router.delete('/:id_tipo', TipoController_1.tipoController.deleteTipo); //ELIMINAR
        this.router.put('/:id_tipo', TipoController_1.tipoController.updateTipo); //MODIFICAR
    }
}
const tipoRoutes = new TipoRoutes(); //<-------
exports.default = tipoRoutes.router;
