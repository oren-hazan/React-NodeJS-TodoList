import express from 'express';
import userAuth from '../middlewares/user.auth.js';
import * as taskController from '../controllers/task.controller.js';

const router = new express.Router();

router.post('/tasks/new', userAuth, taskController.createTask);

router.get('/tasks', userAuth, taskController.getTasks);

router.patch('/tasks/:taskID', userAuth, taskController.updateTask);

router.delete('/tasks/:taskID', userAuth, taskController.deleteTask);

export default router;
