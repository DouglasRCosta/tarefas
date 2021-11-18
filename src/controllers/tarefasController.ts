import { Request, Response } from 'express';
import { Tarefas } from '../models/Tarefas';


export const all = async (req: Request, res: Response) => {
    let tarefas = await Tarefas.findAll();
    res.json(tarefas);
}
export const add = async (req: Request, res: Response) => {
    if (req.body.title) {
        let { title, done } = req.body;
        let nova = await Tarefas.create({
            title,
            done
        })
        res.json(nova);
    }
}
export const update = async (req: Request, res: Response) => {  
    let { id } = req.params;
    let { title, done, content } = req.body
    let update = await Tarefas.findByPk(id);

    if (req.params.id) {
        if (content.length > 255 || title.length > 50) {
            res.json({ err: 'content ou title muito grande tamanho maximo do content 255 caracteres e title 50 caracteres' });
        }
        if (update) {
            update.content = content;
            (title) ? update.title = title : null;
            if (done) {
                (done == 0 || done == 1) ? update.done = done : update.done = 0;
            }

            update.save();
            res.json(update);
        }
    }
    res.json({ err: 'id null' });
}
export const remove = async (req: Request, res: Response) => {

}