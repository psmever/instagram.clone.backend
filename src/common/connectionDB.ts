import { globalConfig } from '@config';
import mysql from 'mysql2/promise';

const connectionDB = mysql.createPool({
  host: globalConfig.mysql_host,
  user: globalConfig.mysql_username,
  port: Number(globalConfig.mysql_port),
  database: globalConfig.mysql_database,
  password: globalConfig.mysql_password,
});

connectionDB.on('connection', function (connection) {
  console.log('Database Connection Success');

  connection.on('error', function (err) {
    console.error(new Date(), 'Database Connection Success Fail', err);
  });
  connection.on('close', function (err) {
    console.error(new Date(), 'Database Connection Close', err);
  });
});

export { connectionDB };
