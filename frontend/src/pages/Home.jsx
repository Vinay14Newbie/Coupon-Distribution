import { CouponCard } from "../components/CouponCard";
import { Header } from "../components/Header";
export const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 p-4">
      <Header />
      <CouponCard />
    </div>
  );
};
