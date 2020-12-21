import supertest from 'supertest';
import { setup } from '../../src/app';

describe('GET /healthcheck', () => {
    let app: any;
    beforeAll(() => {
        app = setup();
    })
    it('should return status ok', async () => {
        const res = await supertest(app)
            .get('/healthcheck')
            .send();
        expect(res).toBeTruthy();
        expect(res.status).toBe(200);
        expect(res.body.status).toBe('ok');
    })
})
