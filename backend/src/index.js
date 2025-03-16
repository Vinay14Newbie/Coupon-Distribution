import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import couponRouter from './routers/couponRouter.js';

const app = express();

// middleware
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
  origin: [
    'https://coupon-distribution-pf3x.onrender.com', // Backend
    'https://coupon-distribution-zeta.vercel.app', // Frontend
    'http://localhost:5173' // Local dev
  ],
  credentials: true
};
app.use(cors(corsOptions));

app.use('/api/coupons', couponRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
