export const CouponCard = ({ coupon, message, onClaimCoupon }) => {
  return (
    <div className="p-4 border rounded-md shadow-md bg-gray-100 flex justify-center items-center flex-col">
      {coupon ? (
        <p className="text-green-600 text-lg">Coupon Code: {coupon}</p>
      ) : (
        <p className="text-red-500">{message}</p>
      )}
      <button
        onClick={onClaimCoupon}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Claim Coupon
      </button>
    </div>
  );
};
