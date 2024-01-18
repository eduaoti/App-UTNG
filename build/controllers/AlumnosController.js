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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.alumnosController = void 0;
const database_1 = __importDefault(require("../database"));
class AlumnosController {
    getAlumnos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const resul = yield database_1.default.query('SELECT * FROM tb_usuarios');
            res.json(resul[0]);
        });
    }
    getByIdAlumnos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_usuario = req.params.id_usuario;
            const resul = yield database_1.default.query('SELECT * FROM tb_usuarios WHERE id_usuario=?', [id_usuario]);
            res.json(resul[0]);
        });
    }
    createAlumnos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO tb_usuarios SET ?', [req.body]);
            res.json({ message: 'Registro guardado' });
        });
    }
    deleteAlumnos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id; //id =req,params, id
            yield database_1.default.query('DELETE FROM empleados WHERE id_usuario=?', [id]);
            res.json({ message: 'Registro Eliminado' });
        });
    }
    updateAlumnos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params; //id =req,params, id
            yield database_1.default.query('UPDATE empleados SET ? WHERE id_usuario= ?', [req.body, id]);
        });
    }
}
exports.alumnosController = new AlumnosController();
