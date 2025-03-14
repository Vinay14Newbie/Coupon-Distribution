import { getNextCoupon } from '../utils/couponUtils.js';

export const claimCouponController = (req, res) => {
  const coupon = getNextCoupon();

  return res.status(200).json({
    success: true,
    message: `Congrats! You claimed ${coupon}`
  });
};
