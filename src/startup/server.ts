import { Logger } from '@common';
import { globalConfig } from '@config';
import bodyParser from 'body-parser';
import express, { Application } from 'express';
import path from 'path';

import { DefaultRouter } from '@src/routers';

interface CheckEnvironmentResult {
  state: boolean;
  message: string;
}

export const checkEnvironment = (): CheckEnvironmentResult => {
  return {
    state: true,
    message: `check end `,
  };
};

// 라우터
function addRouters(app: Application): void {
  // const baseApiRoute = '/api';
  // const baseWebRoute = '/web';
  // const baseRouteVersion = '/v1';

  app.use(`/`, DefaultRouter);
}

// 서버 설정.
export function initServer(app: Application): void {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  app.engine('pug', require('pug').__express);

  app.set('views', path.join(__dirname, 'resources/views'));
  app.set('view engine', 'pug');
  app.use(express.static(path.join(__dirname, 'resources')));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  addRouters(app);

  return;
}

// 서버 시작.
export function startServer(app: Application): void {
  const port = globalConfig.port || 3000;
  const appEnv = globalConfig.app_env || `NOT FOUND APP ENV`;
  const appName = globalConfig.app_name || `NOT FOUND APP NAME`;

  app.listen(port, () =>
    Logger.info(
      `\nExpress :: ${appName} ${appEnv} :: running on port ${port}\n`,
      null,
      true
    )
  );
}
