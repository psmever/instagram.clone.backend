import { Logger } from '@common';
import express, { Application } from 'express';
import * as startup from './startup';

const checkResult = startup.checkEnvironment();

if (checkResult.state === true) {
  const app: Application = express();

  startup.initServer(app);
  startup.startServer(app);
} else {
  Logger.info(`\nExpress start Error :: ${checkResult.message}\n`, null, true);
}
