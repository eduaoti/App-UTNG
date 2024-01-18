"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    saludar(req, res) {
        res.json({ text: 'Hola' });
    }
}
exports.indexController = new IndexController();
