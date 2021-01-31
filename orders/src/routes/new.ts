import express, { Request, Response } from 'express';
import { requireAuth, validateRequest } from '@jtattickets/common';
import { body } from 'express-validator';

const router = express.Router();

router.post('/api/orders/:orderId', async (req: Request, res: Response) => {
  res.send({});
});

export { router as createOrderRouter };
