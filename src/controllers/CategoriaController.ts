import { Request, Response } from "express";
import {pool} from "../database";

class CategoriaController{
    async getCategoria(req:Request, res:Response){
        const resul = await pool.query('SELECT id_categoria, categoria FROM tb_categorias');
        res.json(resul[0]);        
    }

    async getByIdCategoria(req:Request, res:Response){
        const id_categoria = req.params.id_categoria;
        const resul = await pool.query('SELECT id_categoria, categoria FROM tb_categorias WHERE id_categoria=?', [id_categoria]);
        res.json(resul[0]);
    }

    async createCategoria(req:Request, res:Response){
        await pool.query('INSERT INTO tb_categorias SET ?', [req.body]);
        res.json({message:'Registro guardado'})
    }

    async deleteCategoria(req:Request, res:Response){
        const id_categoria = req.params.id_categoria; //id =req,params, id
        await pool.query('DELETE FROM tb_categorias WHERE id_categoria=?', [id_categoria]);
        res.json({message:'Registro Eliminado'})
    } 

    async updateCategoria(req:Request, res:Response){
        const {id_categoria} = req.params; //id =req,params, id
        await pool.query('UPDATE tb_categorias SET ? WHERE id_categoria= ?', [req.body, id_categoria]);
        res.json({message:'Registro Actualizado'})
    }  
}

export const categoriaController=new CategoriaController();

export const createCategoria = async (req: Request, res:Response) => {
    const newCategoria = req.body;    
}