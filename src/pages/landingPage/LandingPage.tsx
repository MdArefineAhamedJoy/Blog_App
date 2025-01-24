import Banner from "@/components/ui/Banner";
import LatestNews from "@/components/ui/latestNews/LatestNews";
import Subscription from "@/components/ui/subscrption/Subscrption";
import TrandingContainer from "@/components/ui/trandingNews/TrandingContainer";

const LandingPage = () => {
  return (
    <div>
      <Banner />
      <LatestNews />
      <TrandingContainer />
      <Subscription />
    </div>
  );
};

export default LandingPage;
