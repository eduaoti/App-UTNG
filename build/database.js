"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const promise_1 = require("mysql2/promise");
exports.pool = (0, promise_1.createPool)({
    host: 'viaduct.proxy.rlwy.net',
    user: 'root',
    password: '2e-B62D2dGFCh4D6G6A3eCC622AF2cHE',
    port: 12680,
    database: 'railway'
});
