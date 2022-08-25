import { index } from '@controller/web/DefaultController';
import { Router } from 'express';

export const DefaultRouter = Router();

DefaultRouter.get('/', index);
