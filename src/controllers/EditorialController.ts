import { Request, Response, json } from "express";
import {pool} from "../database";
import { createUsuario } from "./UsuarioController";
 
 class EditorialController{
    async getEditorial(req:Request, res:Response){
        const resul = await pool.query('SELECT id_editorial, nombre_editorial FROM tb_editoriales');
        res.json(resul[0]);
    }

    async getByIdEditorial(req:Request, res:Response){
        const id_editorial = req.params.id_editorial;
        const resul = await pool.query('SELECT id_editorial, nombre_editorial FROM tb_editoriales WHERE id_editorial=?', [id_editorial]);
        res.json(resul[0]);
    }

    async createEditorial(req:Request, res:Response){
        await pool.query('INSERT INTO tb_editoriales SET ?', [req.body]);
        res.json({message: 'Registro Guardado'});
    }

    async deleteEditorial(req:Request, res:Response){
        const id_editorial = req.params.id_editorial;
        await pool.query('DELETE FROM tb_editoriales WHERE id_editorial=?', [id_editorial]);
        res.json({message:'Registro Eliminado'});
    } 

    async updateEditorial(req:Request, res:Response){
        const {id_editorial} = req.params; //id =req,params, id
        await pool.query('UPDATE tb_editoriales SET ? WHERE id_editorial= ?', [req.body, id_editorial]);
        res.json({message:'Registro Actualizado'})
    } 
 }

 export const editorialController=new EditorialController();

 export const createEditorial = async (req:Request, res:Response) => {
    const  newEditorial = req.body;
 }