import { Request, Response } from "express";
import {pool}
 from "../database";

class CarreraController{
    async getCarrera(req:Request, res:Response){
        const resul = await pool.query('SELECT id_carrera, carrera, area FROM tb_carreras');
        res.json(resul[0]);        
    }

    async getByIdCarrera(req:Request, res:Response){
        const id_carrera = req.params.id_carrera;
        const resul = await pool.query('SELECT id_carrera, carrera, area FROM tb_carreras WHERE id_carrera=?', [id_carrera]);

        res.json(resul[0]);
    }

    async createCarrera(req:Request, res:Response){
        await pool.query('INSERT INTO tb_carreras SET ?', [req.body]);
        res.json({message:'Registro guardado'})
    }

    async deleteCarrera(req:Request, res:Response){
        const id_carrera = req.params.id_carrera; //id =req,params, id
        await pool.query('DELETE FROM tb_carreras WHERE id_carrera=?', [id_carrera]);
        res.json({message:'Registro Eliminado'})
    } 

    async updateCarrera(req:Request, res:Response){
        const {id_carrera} = req.params; //id =req,params, id
        await pool.query('UPDATE tb_carreras SET ? WHERE id_carrera= ?', [req.body, id_carrera]);
        res.json({message:'Registro Actualizado'})
    }  
}

export const carreraController=new CarreraController();

export const createCarrera = async (req: Request, res:Response) => {
    const newCarrera = req.body;    
}