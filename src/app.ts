// src/app.ts
import express from 'express';
import bodyParser from 'body-parser';
//import controllers
import { HealthcheckController } from './controllers/healthcheck';

export function setup() {
    //create express app
    const app: express.Express = express();
    const router: express.Router = express.Router();

    app.use(bodyParser.json());
    app.use(router);  // tell the app this is the router we are using

    const healthcheckController = new HealthcheckController();
    //healthcheck routes
    router.get('/', healthcheckController.healthcheck);
    router.get('/healthcheck', healthcheckController.healthcheck);

    return app;
}
