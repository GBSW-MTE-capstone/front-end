import { Route, Routes } from "react-router-dom";
import { JomungukMuseum } from "./page/tourDetails/jomunguk";
import { Home } from "./page/home";
import "./style/index.scss";
import { Tour } from "./page/tour";
import { Event } from "./page/event";
import { MiniGame } from "./page/miniGame";
import { TourDetailsRouter } from "./page/tourDetailsRouter";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/event" element={<Event />} />
        <Route path="/minigame" element={<MiniGame />} />
        <Route path="/*" element={<Home />} />
        <TourDetailsRouter />
      </Routes>
    </>
  );
};

export default App;
