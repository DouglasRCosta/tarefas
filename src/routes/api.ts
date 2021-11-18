import { Router } from 'express';

import * as tarefasController from '../controllers/tarefasController';

const router = Router();

router.get('/tarefas',tarefasController.all)
router.post('/tarefas',tarefasController.add)
router.put('/tarefas/:id',tarefasController.update)
router.delete('/tarefas/:id',tarefasController.remove)

export default router;