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
exports.createLibro = exports.libroController = void 0;
const database_1 = require("../database");
class LibroController {
    getLibro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const resul = yield database_1.pool.query('SELECT * FROM tb_libros');
            res.json(resul[0]);
        });
    }
    getByIdLibro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_libro = req.params.id_libro;
            const resul = yield database_1.pool.query('SELECT * FROM tb_libros WHERE id_libro=?', [id_libro]);
            res.json(resul[0]);
        });
    }
    createLibro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.pool.query('INSERT INTO tb_libros SET ?', [req.body]);
            res.json({ message: 'Registro Guardado' });
        });
    }
    deleteLibro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_libro = req.params.id_libro; //id =req,params, id
            yield database_1.pool.query('DELETE FROM tb_libros WHERE id_libro=?', [id_libro]);
            res.json({ message: 'Registro Eliminado' });
        });
    }
    updateLibro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_libro } = req.params; //id =req,params, id
            yield database_1.pool.query('UPDATE tb_libros SET ? WHERE id_libro= ?', [req.body, id_libro]);
            res.json({ message: 'Registro Actualizado' });
        });
    }
    getByTitulo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const titulo = req.params.titulo;
            const resul = yield database_1.pool.query('SELECT * FROM `tb_libros` INNER JOIN tb_editoriales On tb_libros.id_editorial = tb_editoriales.id_editorial Inner Join tb_categorias On tb_libros.id_categoria = tb_categorias.id_categoria INNER JOIN tb_tipos on tb_libros.id_tipo = tb_tipos.id_tipo Where titulo = ?', [titulo]);
            res.json(resul[0]);
        });
    }
    getByAutor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const autor = req.params.autor;
            const resul = yield database_1.pool.query('SELECT * FROM `tb_libros` INNER JOIN tb_editoriales On tb_libros.id_editorial = tb_editoriales.id_editorial Inner Join tb_categorias On tb_libros.id_categoria = tb_categorias.id_categoria INNER JOIN tb_tipos on tb_libros.id_tipo = tb_tipos.id_tipo Where autor = ?', [autor]);
            res.json(resul[0]);
        });
    }
    getByTipo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const nombre_tipo = req.params.nombre_tipo;
            const resul = yield database_1.pool.query('SELECT * FROM `tb_libros` INNER JOIN tb_editoriales On tb_libros.id_editorial = tb_editoriales.id_editorial Inner Join tb_categorias On tb_libros.id_categoria = tb_categorias.id_categoria INNER JOIN tb_tipos on tb_libros.id_tipo = tb_tipos.id_tipo Where nombre_tipo = ?', [nombre_tipo]);
            res.json(resul[0]);
        });
    }
    getByCategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const categoria = req.params.categoria;
            const resul = yield database_1.pool.query('SELECT * FROM `tb_libros` INNER JOIN tb_editoriales On tb_libros.id_editorial = tb_editoriales.id_editorial Inner Join tb_categorias On tb_libros.id_categoria = tb_categorias.id_categoria INNER JOIN tb_tipos on tb_libros.id_tipo = tb_tipos.id_tipo Where categoria = ?', [categoria]);
            res.json(resul[0]);
        });
    }
}
exports.libroController = new LibroController();
const createLibro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newLibro = req.body;
});
exports.createLibro = createLibro;
