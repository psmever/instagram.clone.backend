import { baseSuccessResponse } from '@common';
import * as userModel from '@model/userModel';
import { Request, Response } from 'express';
// 기본 라우터
export const allList = async (req: Request, res: Response): Promise<void> => {
  baseSuccessResponse(res, {
    result: await userModel.getAllUser(),
  });
};

export const allList2 = async (req: Request, res: Response): Promise<void> => {
  baseSuccessResponse(res, {
    result: await userModel.getAllUser(),
  });
};

export const allTest = async (req: Request, res: Response): Promise<void> => {
  baseSuccessResponse(res, {
    result: await userModel.getAllUser(),
  });
};

export const userList = async (req: Request, res: Response): Promise<void> => {
  baseSuccessResponse(res, {
    result: await userModel.getAllUser(),
  });
};

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  baseSuccessResponse(res, {
    result: await userModel.getAllUser(),
  });
};
