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
exports.createEditorial = exports.editorialController = void 0;
const database_1 = require("../database");
class EditorialController {
    getEditorial(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const resul = yield database_1.pool.query('SELECT id_editorial, nombre_editorial FROM tb_editoriales');
            res.json(resul[0]);
        });
    }
    getByIdEditorial(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_editorial = req.params.id_editorial;
            const resul = yield database_1.pool.query('SELECT id_editorial, nombre_editorial FROM tb_editoriales WHERE id_editorial=?', [id_editorial]);
            res.json(resul[0]);
        });
    }
    createEditorial(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.pool.query('INSERT INTO tb_editoriales SET ?', [req.body]);
            res.json({ message: 'Registro Guardado' });
        });
    }
    deleteEditorial(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_editorial = req.params.id_editorial;
            yield database_1.pool.query('DELETE FROM tb_editoriales WHERE id_editorial=?', [id_editorial]);
            res.json({ message: 'Registro Eliminado' });
        });
    }
    updateEditorial(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_editorial } = req.params; //id =req,params, id
            yield database_1.pool.query('UPDATE tb_editoriales SET ? WHERE id_editorial= ?', [req.body, id_editorial]);
            res.json({ message: 'Registro Actualizado' });
        });
    }
}
exports.editorialController = new EditorialController();
const createEditorial = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newEditorial = req.body;
});
exports.createEditorial = createEditorial;
