import { Response } from 'express';

// 기본 내용없음.
export function noCotentResponse(response: Response): Response {
  return response.status(201).json();
}

// 기본 성공.
export function baseSuccessResponse<T>(
  response: Response,
  payload: T
): Response {
  return response.status(200).json({
    ...payload,
  });
}
