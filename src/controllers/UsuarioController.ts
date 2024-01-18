import { Request, Response } from "express";
import {pool} from "../database";

class UsuarioController{
    async getUsuario(req:Request, res:Response){
        const resul = await pool.query('SELECT * FROM tb_usuarios');
        res.json(resul[0]);        
    }

    async getByIdUsuario(req:Request, res:Response){
        const id_usuario = req.params.id_usuario;
        const resul = await pool.query('SELECT * FROM tb_usuarios WHERE id_usuario=?', [id_usuario]);
        res.json(resul[0]);
    }

    async createUsuario(req:Request, res:Response){
        await pool.query('INSERT INTO tb_usuarios SET ?', [req.body]);
        res.json({message:'Registro guardado'})
    }

    async deleteUsuario(req:Request, res:Response){
        const id_usuario = req.params.id_usuario; //id =req,params, id
        await pool.query('DELETE FROM tb_usuarios WHERE id_usuario=?', [id_usuario]);
        res.json({message:'Registro Eliminado'})
    } 

    async updateUsuario(req:Request, res:Response){
        const {id_usuario} = req.params; //id =req,params, id
        await pool.query('UPDATE tb_usuarios SET ? WHERE id_usuario= ?', [req.body, id_usuario]);
        res.json({message:'Registro Actualizado'})
    }  
}

export const usuarioController=new UsuarioController();

export const createUsuario = async (req: Request, res:Response) => {
    const newUsuario = req.body;    
}