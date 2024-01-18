"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LoginController_1 = require("../controllers/LoginController");
class LoginRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/:nombre', LoginController_1.loginController.getUser);
    }
}
const loginRoutes = new LoginRoutes(); //<-------
exports.default = loginRoutes.router;
