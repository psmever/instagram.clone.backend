import { globalConfig } from '@config';
import mysql from 'mysql2/promise';

const connectionDB = mysql.createPool({
  host: globalConfig.mysql_host,
  user: globalConfig.mysql_username,
  port: Number(globalConfig.mysql_port),
  database: globalConfig.mysql_database,
  password: globalConfig.mysql_password,
});

export { connectionDB };
