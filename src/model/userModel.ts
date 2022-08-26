import { connectionDB } from '@common';

// 사용자 회원 전체 리스트.
export const getAllUser = async () => {
  const [results] = await connectionDB.execute('select * from users');

  return results;
};
