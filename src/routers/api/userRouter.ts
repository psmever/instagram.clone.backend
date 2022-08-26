import { allList } from '@controller/api/userController';
import { Router } from 'express';

const userRouter = Router();

// TODO : 사용자 리스트.
userRouter.get('/all-user', allList);

export default userRouter;
