
import Banner from "@/components/ui/Banner";
import LatestNews from "@/components/ui/latestNews/LatestNews";
import Subscription from "@/components/ui/subscrption/Subscrption";
import TradingBanner from "@/components/ui/trandingNews/TradingBanner";

const LandingPage = () => {
  return (
    <div>
      <Banner />
      <LatestNews />
      <TradingBanner />
      <Subscription />
    </div>
  );
};

export default LandingPage;
