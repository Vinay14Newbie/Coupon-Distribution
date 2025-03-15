import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import couponRouter from './routers/couponRouter.js';

const app = express();

// middleware
// app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: '*'
  })
);

app.use('/api/coupons', couponRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
