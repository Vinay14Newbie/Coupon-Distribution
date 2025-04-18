import { CouponCard } from "../Components/CouponCard";
import { Header } from "../Components/Header";
export const Home = () => {
  return (
    <div>
      <div className="w-full text-gray-700 bg-gray-300 py-2 text-center absolute">
        Note: The app may take some time to respond as the backend is deployed
        on Render's free tier, which can cause delays due to inactivity..:)
      </div>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 p-4">
        <Header />
        <CouponCard />
      </div>
    </div>
  );
};
