import { BrowserRouter } from "react-router-dom";
import Footer from "./components/shared/Footers";
import NavigationBar from "./components/shared/NavigationBar";
import LandingPage from "./pages/landingPage/LandingPage";

const App = () => {
  return (
    <div  className="2xl:mx-auto xl:mx-auto max-w-7xl">
      <BrowserRouter>
        <div>
          <NavigationBar />
          <LandingPage />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
