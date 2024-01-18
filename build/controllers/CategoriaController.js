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
exports.createCategoria = exports.categoriaController = void 0;
const database_1 = require("../database");
class CategoriaController {
    getCategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const resul = yield database_1.pool.query('SELECT id_categoria, categoria FROM tb_categorias');
            res.json(resul[0]);
        });
    }
    getByIdCategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_categoria = req.params.id_categoria;
            const resul = yield database_1.pool.query('SELECT id_categoria, categoria FROM tb_categorias WHERE id_categoria=?', [id_categoria]);
            res.json(resul[0]);
        });
    }
    createCategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.pool.query('INSERT INTO tb_categorias SET ?', [req.body]);
            res.json({ message: 'Registro guardado' });
        });
    }
    deleteCategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_categoria = req.params.id_categoria; //id =req,params, id
            yield database_1.pool.query('DELETE FROM tb_categorias WHERE id_categoria=?', [id_categoria]);
            res.json({ message: 'Registro Eliminado' });
        });
    }
    updateCategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_categoria } = req.params; //id =req,params, id
            yield database_1.pool.query('UPDATE tb_categorias SET ? WHERE id_categoria= ?', [req.body, id_categoria]);
            res.json({ message: 'Registro Actualizado' });
        });
    }
}
exports.categoriaController = new CategoriaController();
const createCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newCategoria = req.body;
});
exports.createCategoria = createCategoria;
