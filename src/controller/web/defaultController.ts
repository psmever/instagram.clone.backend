import { globalConfig } from '@config';
import { Request, Response } from 'express';

// 기본 라우터
export const index = (req: Request, res: Response) => {
  res.render('index', {
    appName: `${globalConfig.app_name}`,
    env: globalConfig.app_env,
  });
};
