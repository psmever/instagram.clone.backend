import { globalConfig } from '@config';
import { Request, Response } from 'express';

// 기본 서버 상태 체크.
export const index = async (req: Request, res: Response): Promise<void> => {
  res.render('index', {
    appName: `${globalConfig.app_name}`,
    env: globalConfig.app_env,
  });
};
