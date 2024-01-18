"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PrestamoController_1 = require("../controllers/PrestamoController");
class PrestamoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', PrestamoController_1.prestamoController.getPrestamo); //CONSULTAR TODOS
        this.router.get('/:id_prestamo', PrestamoController_1.prestamoController.getByIdPrestamo); //CONSULTAR 1
        this.router.post('/', PrestamoController_1.prestamoController.createPrestamo); //INSERTAR
        this.router.delete('/:id_prestamo', PrestamoController_1.prestamoController.deletePrestamo); //ELIMINAR
        this.router.put('/:id_prestamo', PrestamoController_1.prestamoController.updatePrestamo); //MODIFICAR
    }
}
const prestamoRoutes = new PrestamoRoutes(); //<-------
exports.default = prestamoRoutes.router;
