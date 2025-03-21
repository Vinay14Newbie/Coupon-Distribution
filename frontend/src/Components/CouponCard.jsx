import { useState } from "react";
import { claimCoupon } from "../utils/api";

export const CouponCard = () => {
  const [coupon, setCoupon] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
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
    setLoading(false);
  };

  return (
    <div className="p-4 w-[400px] h-[150px] border rounded-md shadow-md bg-gray-100 flex justify-center items-center flex-col">
      {coupon ? (
        <p className="text-green-600 text-lg">Coupon Code: {coupon}</p>
      ) : (
        <p className="text-red-500 text-center">{message}</p>
      )}
      <button
        onClick={handleSubmit}
        className="mt-4 w-[140px] bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        disabled={loading}
      >
        {loading ? "Claiming..." : "Claim Coupon"}
      </button>
    </div>
  );
};
