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
    origin: 'http://localhost:5173', // ✅ Match the frontend URL
    credentials: true // ✅ Allow cookies and auth headers
  })
);

app.use('/api/coupons', couponRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
