import { useState } from "react";
import { claimCoupon } from "../utils/api";

export const CouponCard = () => {
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
    <div className="p-4 border rounded-md shadow-md bg-gray-100 flex justify-center items-center flex-col">
      {coupon ? (
        <p className="text-green-600 text-lg">Coupon Code: {coupon}</p>
      ) : (
        <p className="text-red-500">{message}</p>
      )}
      <button
        onClick={handleSubmit}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Claim Coupon
      </button>
    </div>
  );
};
