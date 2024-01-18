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
exports.createTipo = exports.tipoController = void 0;
const database_1 = require("../database");
class TipoController {
    getTipo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const resul = yield database_1.pool.query('SELECT id_tipo, nombre_tipo FROM tb_tipos');
            res.json(resul[0]);
        });
    }
    getByIdTipo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_tipo = req.params.id_tipo;
            const resul = yield database_1.pool.query('SELECT id_tipo, nombre_tipo FROM tb_tipos WHERE id_tipo=?', [id_tipo]);
            res.json(resul[0]);
        });
    }
    createTipo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.pool.query('INSERT INTO tb_tipos SET ?', [req.body]);
            res.json({ message: 'Registro guardado' });
        });
    }
    deleteTipo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_tipo = req.params.id_tipo; //id =req,params, id
            yield database_1.pool.query('DELETE FROM tb_tipos WHERE id_tipo=?', [id_tipo]);
            res.json({ message: 'Registro Eliminado' });
        });
    }
    updateTipo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_tipo } = req.params; //id =req,params, id
            yield database_1.pool.query('UPDATE tb_tipos SET ? WHERE id_tipo= ?', [req.body, id_tipo]);
            res.json({ message: 'Registro Actualizado' });
        });
    }
}
exports.tipoController = new TipoController();
const createTipo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUsuario = req.body;
});
exports.createTipo = createTipo;
