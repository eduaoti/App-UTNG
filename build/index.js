

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const index_routes_1 = __importDefault(require("./routes/index-routes"));
const usuario_routes_1 = __importDefault(require("./routes/usuario-routes"));
const editorial_routes_1 = __importDefault(require("./routes/editorial-routes"));
const libro_routes_1 = __importDefault(require("./routes/libro-routes"));
const tipo_routes_1 = __importDefault(require("./routes/tipo-routes"));
const carrera_routes_1 = __importDefault(require("./routes/carrera-routes"));
const categoria_routes_1 = __importDefault(require("./routes/categoria-routes"));
const prestamo_routes_1 = __importDefault(require("./routes/prestamo-routes"));
const login_routes_1 = __importDefault(require("./routes/login-routes"));
const config_1 = require("./config");
class Server {
    constructor() {
        this.app = (0, express_1.default)(); //inicializando la app
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', config_1.PORT);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json()); //ACEPTA FORMATO JSON
        this.app.use(express_1.default.urlencoded({ extended: false })); //ACEPTA FORMULARIOS HTML
    }
    routes() {
        this.app.use('/', index_routes_1.default);
        this.app.use('/usuario', usuario_routes_1.default);
        this.app.use('/editorial', editorial_routes_1.default);
        this.app.use('/libro', libro_routes_1.default);
        this.app.use('/tipo', tipo_routes_1.default);
        this.app.use('/carrera', carrera_routes_1.default);
        this.app.use('/categoria', categoria_routes_1.default);
        this.app.use('/prestamo', prestamo_routes_1.default);
        this.app.use('/login', login_routes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
