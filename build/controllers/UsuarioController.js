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
exports.createUsuario = exports.usuarioController = void 0;
const database_1 = require("../database");
class UsuarioController {
    getUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const resul = yield database_1.pool.query('SELECT * FROM tb_usuarios');
            res.json(resul[0]);
        });
    }
    getByIdUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_usuario = req.params.id_usuario;
            const resul = yield database_1.pool.query('SELECT * FROM tb_usuarios WHERE id_usuario=?', [id_usuario]);
            res.json(resul[0]);
        });
    }
    createUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.pool.query('INSERT INTO tb_usuarios SET ?', [req.body]);
            res.json({ message: 'Registro guardado' });
        });
    }
    deleteUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_usuario = req.params.id_usuario; //id =req,params, id
            yield database_1.pool.query('DELETE FROM tb_usuarios WHERE id_usuario=?', [id_usuario]);
            res.json({ message: 'Registro Eliminado' });
        });
    }
    updateUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_usuario } = req.params; //id =req,params, id
            yield database_1.pool.query('UPDATE tb_usuarios SET ? WHERE id_usuario= ?', [req.body, id_usuario]);
            res.json({ message: 'Registro Actualizado' });
        });
    }
}
exports.usuarioController = new UsuarioController();
const createUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUsuario = req.body;
});
exports.createUsuario = createUsuario;
