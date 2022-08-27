import { allList, allTest, userList } from '@controller/api/userController';
import { Router } from 'express';

const userRouter = Router();

// 사용자 리스트.
userRouter.get('/all-user', allList);
userRouter.get('/all-test', allTest);
userRouter.get('/user-list', userList);

export default userRouter;
