import { Router } from 'express';
import authRouter from './authRouter';
import postRouter from './postRouter';
import commentRouter from './commentRouter';
import userRouter from './userRouter';


const router = Router();

router.use(authRouter);
router.use(postRouter);
router.use(commentRouter);
router.use(userRouter);

export default router;