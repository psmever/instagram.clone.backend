import { connectionDB } from '@common';

export const getAllUser = async () => {
  const [results] = await connectionDB.execute('select * from users');

  return results;
};
