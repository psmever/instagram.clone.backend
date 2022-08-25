import { connectionDB } from '@common';

export const getAllUser = async () => {
  const task = await connectionDB.query('select * from users');

  console.debug(task);
};
