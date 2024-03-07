import { Router } from "express";
import authRouter from './auth.routes.js';

const router = new Router();

router.use('/start',authRouter);

export default router;
