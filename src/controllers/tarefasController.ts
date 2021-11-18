import { Request, Response } from 'express';
import { Tarefas} from '../models/Tarefas';


export const all = async (req:Request, res:Response)=>{
    let tarefas = await Tarefas.findAll();
    res.json(tarefas);
}
export const add = async (req:Request, res:Response)=>{
    if(req.body.title){
        let {title,done} = req.body;
        let nova  = await Tarefas.create({
            title,
            done
        })
        res.json(nova);
    }
}
export const update = async (req:Request, res:Response)=>{
    
}
export const remove = async (req:Request, res:Response)=>{
    
}