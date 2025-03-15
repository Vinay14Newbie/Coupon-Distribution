export const claimCoupon = async () => {
  const res = await fetch("http://localhost:3000/api/coupons/claim", {
    method: "POST",
    credentials: "include", //to handle cookies
  });
  return res.json();
};
