import { CouponCard } from "../Components/CouponCard";
import { Header } from "../Components/Header";
export const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 p-4">
      <Header />
      <CouponCard />
    </div>
  );
};
