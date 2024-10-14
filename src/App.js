import { BrowserRouter as Router } from "react-router-dom";
import Main from "./pages/Main";
import "./style/App.css";
import "swiper/css/bundle";

import { PortfolioProvider } from "./context/AppContext";

function App() {
  return (
    <PortfolioProvider>
      <Router>
        <Main />
      </Router>
    </PortfolioProvider>
  );
}

export default App;
