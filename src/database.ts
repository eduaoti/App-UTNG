import {createPool} from 'mysql2/promise';
import { Connection } from 'promise-mysql';
 
export const pool = createPool({
    host:'viaduct.proxy.rlwy.net',
    user: 'root',
    password: '2e-B62D2dGFCh4D6G6A3eCC622AF2cHE',
    port: 12680,
    database: 'railway'
});


