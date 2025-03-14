import express from 'express';
import { checkAbuse } from '../middlewares/authMiddleware.js';
import { claimCouponController } from '../controller/couponController.js';

const router = express.Router();

router.post('/claim', checkAbuse, claimCouponController);

export default router;
