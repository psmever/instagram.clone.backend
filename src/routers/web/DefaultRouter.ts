import { Router } from 'express';
import { index } from '@controller/web/DefaultController';

export const DefaultRouter = Router();

DefaultRouter.get('/index', index);
