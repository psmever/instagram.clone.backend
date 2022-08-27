import { index } from '@controller/web/defaultController';
import { Router } from 'express';

const defaultRouter = Router();

defaultRouter.get('/', index);

export default defaultRouter;
