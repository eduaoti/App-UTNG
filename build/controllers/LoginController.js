"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = void 0;
const database_1 = require("../database");
class LoginController {
    getLogin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const resul = yield database_1.pool.query('SELECT * FROM tb_usuarios');
            res.json(resul[0]);
        });
    }
    //Todo este bloque
    getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombre } = req.params;
            const result = yield database_1.pool.query('SELECT nombre, correo, rol, id_carrera FROM tb_usuarios WHERE id_usuario=? AND contrasena=?', [nombre, req.body.contrasena]);
            res.json(result[0]);
        });
    }
}
exports.loginController = new LoginController();
