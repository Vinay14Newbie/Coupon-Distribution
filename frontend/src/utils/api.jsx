export const claimCoupon = async () => {
  const res = await fetch(
    "https://coupon-distribution-pf3x.onrender.com/api/coupons/claim",
    {
      method: "POST",
      credentials: "include", //to handle cookies
    }
  );
  return res.json();
};
