import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

//router.get('/', userController.index); // Nao deveia ter
// router.get('/:id', userController.show); // Nao deveria ter

router.post('/',loginRequired, userController.store);
router.put('/', loginRequired, userController.update); // Usuario não deve escolher o id
router.delete('/', loginRequired, userController.delete); // Usuario não deve escolher o id
export default router;
