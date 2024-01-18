import { Request, Response } from "express";
import { pool } from "../database";

class PrestamoController{
    async getPrestamo(req:Request, res:Response){
        const resul = await pool.query('SELECT * FROM tb_prestamos');
        res.json(resul[0]);        
    }

    async getByIdPrestamo(req:Request, res:Response){
        const id_prestamo = req.params.id_prestamo;
        const resul = await pool.query('SELECT * FROM tb_prestamos WHERE id_prestamo=?', [id_prestamo]);
        res.json(resul[0]);
    }

    async createPrestamo(req:Request, res:Response){
       await pool.query('INSERT INTO tb_prestamos SET ?', [req.body]);
       //const {id_prestamo} = req.body.id_prestamo;
       //const {id_usuario} = req.body.id_usuario;
       //const {id_libro} = req.body.id_libro;
      // const {fecha_prestamo} = req.body.fecha_prestamo;
       //const {fecha_devolucion} = req.body.fecha_devolucion;
       //const {fecha_entrega} = req.body.fecha_entrega;
       //const {estado} = req.body.estado;
       //await pool.query('INSERT INTO tb_prestamos (id_usuario,id_libro,fecha_prestamo,fecha_devolucion,fecha_entrega,estado) VALUES (?, ?, ?, ?,?,?)',[id_usuario,id_libro,fec,null,null,null]);
        res.json({message:'Registro guardado'})
    }

    async deletePrestamo(req:Request, res:Response){
        const id_prestamo = req.params.id_prestamo; //id =req,params, id
        await pool.query('DELETE FROM tb_prestamos WHERE id_prestamo=?', [id_prestamo]);
        res.json({message:'Registro Eliminado'})
    } 

    async updatePrestamo(req:Request, res:Response){
        const {id_prestamo} = req.params; //id =req,params, id
        await pool.query('UPDATE tb_prestamos SET ? WHERE id_prestamo= ?', [req.body, id_prestamo]);
        res.json({message:'Registro Actualizado'})
    }  
}

export const prestamoController=new PrestamoController();

export const createPrestamo = async (req: Request, res:Response) => {
    const newPrestamo = req.body;    
}