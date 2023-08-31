import "./scss/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import EventsPage from "./pages/EventsPage";
import AboutUsPage from "./pages/AboutUsPage";

import aboutUsData from "./json/aboutUsPage.json";
import eventsPageData from "./json/eventsPage.json";
import ResourcesPage from "./pages/ResourcesPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={LandingPage} />
          <Route
            exact
            path="/about"
            Component={AboutUsPage}
            data={aboutUsData}
          />
          <Route
            exact
            path="/events"
            Component={EventsPage}
            data={eventsPageData}
          />
          <Route exact path="/resources" Component={ResourcesPage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
