import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import CalendarView from "./pages/CalendarView";
import Marketplace from "./pages/Marketplace";
import LeaderBoard from "./pages/LeaderBoard";
import Wallet from "./pages/Wallet";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/marketplace":
        title = "";
        metaDescription = "";
        break;
      case "/leader-board":
        title = "";
        metaDescription = "";
        break;
      case "/wallet":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<CalendarView />} />
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path="/leader-board" element={<LeaderBoard />} />
      <Route path="/wallet" element={<Wallet />} />
    </Routes>
  );
}
export default App;
