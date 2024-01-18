"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CarreraController_1 = require("../controllers/CarreraController");
class CarreraRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', CarreraController_1.carreraController.getCarrera); //CONSULTAR TODOS
        this.router.get('/:id_carrera', CarreraController_1.carreraController.getByIdCarrera); //CONSULTAR 1
        this.router.post('/', CarreraController_1.carreraController.createCarrera); //INSERTAR
        this.router.delete('/:id_carrera', CarreraController_1.carreraController.deleteCarrera); //ELIMINAR
        this.router.put('/:id_carrera', CarreraController_1.carreraController.updateCarrera); //MODIFICAR
    }
}
const carreraRoutes = new CarreraRoutes(); //<-------
exports.default = carreraRoutes.router;
