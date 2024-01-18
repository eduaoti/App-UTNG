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
exports.createPrestamo = exports.prestamoController = void 0;
const database_1 = require("../database");
class PrestamoController {
    getPrestamo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const resul = yield database_1.pool.query('SELECT * FROM tb_prestamos');
            res.json(resul[0]);
        });
    }
    getByIdPrestamo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_prestamo = req.params.id_prestamo;
            const resul = yield database_1.pool.query('SELECT * FROM tb_prestamos WHERE id_prestamo=?', [id_prestamo]);
            res.json(resul[0]);
        });
    }
    createPrestamo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.pool.query('INSERT INTO tb_prestamos SET ?', [req.body]);
            //const {id_prestamo} = req.body.id_prestamo;
            //const {id_usuario} = req.body.id_usuario;
            //const {id_libro} = req.body.id_libro;
            // const {fecha_prestamo} = req.body.fecha_prestamo;
            //const {fecha_devolucion} = req.body.fecha_devolucion;
            //const {fecha_entrega} = req.body.fecha_entrega;
            //const {estado} = req.body.estado;
            //await pool.query('INSERT INTO tb_prestamos (id_usuario,id_libro,fecha_prestamo,fecha_devolucion,fecha_entrega,estado) VALUES (?, ?, ?, ?,?,?)',[id_usuario,id_libro,fec,null,null,null]);
            res.json({ message: 'Registro guardado' });
        });
    }
    deletePrestamo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_prestamo = req.params.id_prestamo; //id =req,params, id
            yield database_1.pool.query('DELETE FROM tb_prestamos WHERE id_prestamo=?', [id_prestamo]);
            res.json({ message: 'Registro Eliminado' });
        });
    }
    updatePrestamo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_prestamo } = req.params; //id =req,params, id
            yield database_1.pool.query('UPDATE tb_prestamos SET ? WHERE id_prestamo= ?', [req.body, id_prestamo]);
            res.json({ message: 'Registro Actualizado' });
        });
    }
}
exports.prestamoController = new PrestamoController();
const createPrestamo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newPrestamo = req.body;
});
exports.createPrestamo = createPrestamo;
