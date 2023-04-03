// Estou usando destruction, mas poderia ser normal: import express from 'express'
// const ruter = new express.Router()
import { Router } from 'express';
import alunoController from '../controllers/AlunoController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();
router.get('/', alunoController.index);
router.post('/', alunoController.store);
router.put('/:id', loginRequired, alunoController.update);
router.get('/:id', loginRequired, alunoController.show);
router.delete('/:id', loginRequired, alunoController.delete);
export default router;
