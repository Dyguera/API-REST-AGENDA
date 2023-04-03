// Estou usando destruction, mas poderia ser normal: import express from 'express'
// const ruter = new express.Router()
import { Router } from 'express';
import homeController from '../controllers/HomeController';

const router = new Router();
router.get('/', homeController.index);
export default router;
