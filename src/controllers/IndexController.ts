import { Request, Response } from "express";
import {pool }from "../database";

class IndexController{
    saludar(req:Request, res:Response){
        res.json({text:'Hola'});
    }
}

export const indexController=new IndexController();