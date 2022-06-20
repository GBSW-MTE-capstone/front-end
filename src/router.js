import { Route, Routes } from "react-router-dom";
import { Home } from "./page/home";
import "./style/index.scss";
import { Tour } from "./page/tour";
import { Event } from "./page/event";
import { MiniGame } from "./page/miniGame";
const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/event" element={<Event />} />
        <Route path="/minigame" element={<MiniGame />} />


        <Route path="/*" element={<Home />} />
      </Routes>
    </>
  );
};

export default Router;
