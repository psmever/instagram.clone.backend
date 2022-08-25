import dotenv from 'dotenv';
dotenv.config();

const globalConfig = {
  node_env: process.env.NODE_ENV || 'develope',
  app_name: process.env.APP_NAME || 'instagram.clone.backend',
  app_env: process.env.APP_ENV || 'develop',
  port: process.env.PORT || 3000,
  hostname: process.env.HOSTNAME || 'http://localhost',
  mysql_username: process.env.MYSQL_USERNAME,
  mysql_password: process.env.MYSQL_PASSWORD,
  mysql_database: process.env.MYSQL_DATABASE,
  mysql_host: process.env.MYSQL_HOST,
  mysql_dialect: process.env.MYSQL_DIALECT,
  mysql_port: process.env.MYSQL_PORT,
};

export { globalConfig };
