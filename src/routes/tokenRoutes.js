// Estou usando destruction, mas poderia ser normal: import express from 'express'
// const ruter = new express.Router()
import { Router } from 'express';
import tokenController from '../controllers/TokenController';

const router = new Router();
router.post('/', tokenController.store);
export default router;
