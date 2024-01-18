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
exports.createCarrera = exports.carreraController = void 0;
const database_1 = require("../database");
class CarreraController {
    getCarrera(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const resul = yield database_1.pool.query('SELECT id_carrera, carrera, area FROM tb_carreras');
            res.json(resul[0]);
        });
    }
    getByIdCarrera(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_carrera = req.params.id_carrera;
            const resul = yield database_1.pool.query('SELECT id_carrera, carrera, area FROM tb_carreras WHERE id_carrera=?', [id_carrera]);
            res.json(resul[0]);
        });
    }
    createCarrera(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.pool.query('INSERT INTO tb_carreras SET ?', [req.body]);
            res.json({ message: 'Registro guardado' });
        });
    }
    deleteCarrera(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_carrera = req.params.id_carrera; //id =req,params, id
            yield database_1.pool.query('DELETE FROM tb_carreras WHERE id_carrera=?', [id_carrera]);
            res.json({ message: 'Registro Eliminado' });
        });
    }
    updateCarrera(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_carrera } = req.params; //id =req,params, id
            yield database_1.pool.query('UPDATE tb_carreras SET ? WHERE id_carrera= ?', [req.body, id_carrera]);
            res.json({ message: 'Registro Actualizado' });
        });
    }
}
exports.carreraController = new CarreraController();
const createCarrera = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newCarrera = req.body;
});
exports.createCarrera = createCarrera;
