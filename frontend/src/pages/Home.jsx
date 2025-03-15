import { useState } from "react";
import { CouponCard } from "../components/CouponCard";
import { Header } from "../components/Header";
import { claimCoupon } from "../utils/api";
export const Home = () => {
  const [coupon, setCoupon] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async () => {
    console.log("Clicked claim coupon");
    try {
      const res = await claimCoupon();
      console.log("Res ", res.message);

      if (res.success) {
        setCoupon(res.coupon);
        setMessage("");
      } else {
        setCoupon("");
        setMessage(res.message);
      }
    } catch (error) {
      setMessage("Failed to claim coupon");
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 p-4">
      <Header />
      <CouponCard
        coupon={coupon}
        message={message}
        onClaimCoupon={handleSubmit}
      />
    </div>
  );
};
