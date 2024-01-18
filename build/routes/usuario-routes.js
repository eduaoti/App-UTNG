"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsuarioController_1 = require("../controllers/UsuarioController");
class UsuarioRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', UsuarioController_1.usuarioController.getUsuario); //CONSULTAR TODOS
        this.router.get('/:id_usuario', UsuarioController_1.usuarioController.getByIdUsuario); //CONSULTAR 1
        this.router.post('/', UsuarioController_1.usuarioController.createUsuario); //INSERTAR
        this.router.delete('/:id_usuario', UsuarioController_1.usuarioController.deleteUsuario); //ELIMINAR
        this.router.put('/:id_usuario', UsuarioController_1.usuarioController.updateUsuario); //MODIFICAR
    }
}
const usuarioRoutes = new UsuarioRoutes(); //<-------
exports.default = usuarioRoutes.router;
