import { Request, Response, json } from "express";
import { pool } from "../database";



class LoginController{
    async getLogin(req:Request, res:Response){
        const resul = await pool.query('SELECT * FROM tb_usuarios');
        res.json(resul[0]);
    }

    //Todo este bloque
    async getUser(req:Request,res:Response){
        const {nombre}=req.params;
        const result=await pool.query('SELECT nombre, correo, rol, id_carrera FROM tb_usuarios WHERE id_usuario=? AND contrasena=?',[nombre,req.body.contrasena]);
        res.json(result[0]);
    
    }
    //hasta aqui
}
export const loginController=new LoginController(); 