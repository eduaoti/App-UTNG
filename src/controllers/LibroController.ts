import { Request, Response, json } from "express";
import { pool } from "../database";

 
 class LibroController{
    async getLibro(req:Request, res:Response){
        const resul = await pool.query('SELECT * FROM tb_libros');
        res.json(resul[0]);
    }

    async getByIdLibro(req:Request, res:Response){
        const id_libro = req.params.id_libro;
        const resul = await pool.query('SELECT * FROM tb_libros WHERE id_libro=?', [id_libro]);
        res.json(resul[0]);
    }

    async createLibro(req:Request, res:Response){
        await pool.query('INSERT INTO tb_libros SET ?', [req.body]);
        res.json({message: 'Registro Guardado'});
    }

    async deleteLibro(req:Request, res:Response){
        const id_libro = req.params.id_libro; //id =req,params, id
        await pool.query('DELETE FROM tb_libros WHERE id_libro=?', [id_libro]);
        res.json({message:'Registro Eliminado'})
    } 

    async updateLibro(req:Request, res:Response){
        const {id_libro} = req.params; //id =req,params, id
        await pool.query('UPDATE tb_libros SET ? WHERE id_libro= ?', [req.body, id_libro]);
        res.json({message:'Registro Actualizado'})
    } 

    async getByTitulo(req:Request, res:Response){
        const titulo = req.params.titulo;
        const resul = await pool.query('SELECT * FROM `tb_libros` INNER JOIN tb_editoriales On tb_libros.id_editorial = tb_editoriales.id_editorial Inner Join tb_categorias On tb_libros.id_categoria = tb_categorias.id_categoria INNER JOIN tb_tipos on tb_libros.id_tipo = tb_tipos.id_tipo Where titulo = ?', [titulo]);
        res.json(resul[0]);
    }

    async getByAutor(req:Request, res:Response){
        const autor = req.params.autor;
        const resul = await pool.query('SELECT * FROM `tb_libros` INNER JOIN tb_editoriales On tb_libros.id_editorial = tb_editoriales.id_editorial Inner Join tb_categorias On tb_libros.id_categoria = tb_categorias.id_categoria INNER JOIN tb_tipos on tb_libros.id_tipo = tb_tipos.id_tipo Where autor = ?', [autor]);
        res.json(resul[0]);
    }

    async getByTipo(req:Request, res:Response){
        const nombre_tipo = req.params.nombre_tipo;
        const resul = await pool.query('SELECT * FROM `tb_libros` INNER JOIN tb_editoriales On tb_libros.id_editorial = tb_editoriales.id_editorial Inner Join tb_categorias On tb_libros.id_categoria = tb_categorias.id_categoria INNER JOIN tb_tipos on tb_libros.id_tipo = tb_tipos.id_tipo Where nombre_tipo = ?', [nombre_tipo]);
        res.json(resul[0]);
    }

    async getByCategoria(req:Request, res:Response){
        const categoria = req.params.categoria;
        const resul = await pool.query('SELECT * FROM `tb_libros` INNER JOIN tb_editoriales On tb_libros.id_editorial = tb_editoriales.id_editorial Inner Join tb_categorias On tb_libros.id_categoria = tb_categorias.id_categoria INNER JOIN tb_tipos on tb_libros.id_tipo = tb_tipos.id_tipo Where categoria = ?', [categoria]);
        res.json(resul[0]);
    }


 }

 export const libroController=new LibroController();

 export const createLibro = async (req:Request, res:Response) => {
    const  newLibro = req.body;
 }