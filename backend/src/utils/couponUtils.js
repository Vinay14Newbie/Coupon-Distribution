// list of all given coupons

const coupons = [
  'COUPON1',
  'COUPON2',
  'COUPON3',
  'COUPON4',
  'COUPON5',
  'COUPON6'
];

let currentIdx = 0;

export const getNextCoupon = () => {
  const coupon = coupons[currentIdx];
  currentIdx = (currentIdx + 1) % coupons.length;
  return coupon;
};
