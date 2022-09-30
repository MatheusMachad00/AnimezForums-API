import { Router } from 'express';
import authRouter from './authRouter';
import postRouter from './postRouter';
import commentRouter from './commentRouter';


const router = Router();

router.use(authRouter);
router.use(postRouter);
router.use(commentRouter);

export default router;