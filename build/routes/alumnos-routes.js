"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AlumnosController_1 = require("../controllers/AlumnosController");
class AlumnosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', AlumnosController_1.alumnosController.getAlumnos); //CONSULTAR TODOS
        this.router.get('/:id_usuario', AlumnosController_1.alumnosController.getByIdAlumnos); //CONSULTAR 1
        this.router.post('/', AlumnosController_1.alumnosController.createAlumnos);
        this.router.delete('/:id', AlumnosController_1.alumnosController.deleteAlumnos);
        this.router.put('/:id', AlumnosController_1.alumnosController.updateAlumnos);
    }
}
const alumnosRoutes = new AlumnosRoutes();
exports.default = alumnosRoutes.router;
