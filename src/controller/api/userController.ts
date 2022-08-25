import { baseSuccessResponse } from '@common';
import * as userModel from '@model/userModel';
import { Request, Response } from 'express';
// 기본 라우터
export const allList = async (req: Request, res: Response): Promise<void> => {
  const task = await userModel.getAllUser();

  baseSuccessResponse(res, {
    user: task,
  });
};
