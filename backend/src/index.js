import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import couponRouter from './routers/couponRouter.js';

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
  origin: '*',
  credentials: true
};
app.use(cors(corsOptions));

// app.use(
//   cors({
//     origin: '*',
//     origin: (origin, callback) => {
//       if (
//         !origin ||
//         origin.includes('https://coupon-distribution-t01c.onrender.com') || // backend
//         origin.includes('https://coupon-distribution-9uhj.vercel.app') || // frontend on Vercel
//         origin.startsWith('http://localhost')
//       ) {
//         callback(null, true);
//       } else {
//         callback(new Error('Not allowed by CORS'));
//       }
//     },
//     allowedHeaders: 'Origin,X-Requested-With,Content-Type,Accept,Authorization',
//     credentials: true
//   })
// );

// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   );
//   next();
// });

app.use('/api/coupons', couponRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
