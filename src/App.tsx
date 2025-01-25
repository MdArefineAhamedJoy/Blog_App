import { BrowserRouter } from "react-router-dom";
import Footer from "./components/shared/Footers";
import NavigationBar from "./components/shared/NavigationBar";
import LandingPage from "./pages/landingPage/LandingPage";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavigationBar />
        <LandingPage />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
