import {
  allList,
  allList2,
  allTest,
  getUsers,
  userList,
} from '@controller/api/userController';
import { Router } from 'express';

const userRouter = Router();

// 사용자 리스트.
userRouter.get('/all-user', allList);
userRouter.get('/all-user2', allList2);
userRouter.get('/all-test', allTest);
userRouter.get('/user-list', userList);
userRouter.post('/users', getUsers);

export default userRouter;
