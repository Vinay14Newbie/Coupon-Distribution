import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import couponRouter from './routers/couponRouter.js';

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: (origin, callback) => {
      if (
        !origin ||
        origin.includes('https://coupon-distribution-t01c.onrender.com') || // backend
        origin.includes('https://coupon-distribution-9uhj.vercel.app') || // frontend on Vercel
        origin.startsWith('http://localhost')
      ) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true
  })
);

app.use('/api/coupons', couponRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
