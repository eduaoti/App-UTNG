import { Request, Response } from "express";
import {pool }from "../database";

class TipoController{
    async getTipo(req:Request, res:Response){
        const resul = await pool.query('SELECT id_tipo, nombre_tipo FROM tb_tipos');

        res.json(resul[0]);        
    }

    async getByIdTipo(req:Request, res:Response){
        const id_tipo = req.params.id_tipo;
        const resul = await pool.query('SELECT id_tipo, nombre_tipo FROM tb_tipos WHERE id_tipo=?', [id_tipo]);

        res.json(resul[0]);
    }

    async createTipo(req:Request, res:Response){
        await pool.query('INSERT INTO tb_tipos SET ?', [req.body]);
        res.json({message:'Registro guardado'})
    }

    async deleteTipo(req:Request, res:Response){
        const id_tipo = req.params.id_tipo; //id =req,params, id
        await pool.query('DELETE FROM tb_tipos WHERE id_tipo=?', [id_tipo]);
        res.json({message:'Registro Eliminado'})
    } 

    async updateTipo(req:Request, res:Response){
        const {id_tipo} = req.params; //id =req,params, id
        await pool.query('UPDATE tb_tipos SET ? WHERE id_tipo= ?', [req.body, id_tipo]);
        res.json({message:'Registro Actualizado'})
    }  
}

export const tipoController=new TipoController();

export const createTipo = async (req: Request, res:Response) => {
    const newUsuario = req.body;    

}