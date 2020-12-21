import { Request, Response } from 'express';
const pkg = require('./../../package.json');

export class HealthcheckController {
    public healthcheck = (req: Request, res: Response) => {
        res.json({
            status: 'ok',
            uptime: process.uptime(),
            name: pkg.name,
            version: pkg.version
        });
    }
}
