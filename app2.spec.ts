import * as supertest from 'supertest';
import * as multer from 'multer';

jest.mock('multer');

(multer as any).mockImplementation(() => {
  return {
    single: () => (req, res, next) => {
      next();
    },
  };
});

describe('Sample Test File 2', () => {
  it('should return 200 when a file is uploaded', async () => {
    (multer as any).mockImplementation(() => {
      return {
        single: () => (req, res, next) => {
          req.file = 'hello';
          next();
        },
      };
    });

    const module = await import('./app');
    const app = module.default;
    await supertest(app).post('/').expect(200);
  });
});
