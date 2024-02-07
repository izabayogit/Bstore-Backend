import express from 'express';
import userController from '../controller/userController';

const router = express.Router();
router.post('/login', userController.login);
router.post('/signup', userController.createUser)


export default router;
