import { connectionDB, Logger } from '@common';
import express, { Application } from 'express';
import * as startup from './startup';

const checkResult = startup.checkEnvironment();

if (checkResult.state === true) {
  // TODO: 디비 접속 에러 났을때 어떻게 처리 해야 할지?
  console.debug(connectionDB.getConnection());

  const app: Application = express();

  startup.initServer(app);
  startup.startServer(app);
} else {
  Logger.info(`\nExpress start Error :: ${checkResult.message}\n`, null, true);
}
