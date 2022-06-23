import { Route, Routes } from "react-router-dom";
import { Home } from "./page/home";
import "./style/index.scss";
import { Tour } from "./page/tour";
import { Event } from "./page/event";
import { MiniGame } from "./page/miniGame";
import { Foods } from "./page/foods";
import { QnA } from "./page/QnA";
import { TourReview } from "./page/tourReview";
const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/event" element={<Event />} />
        <Route path="/minigame" element={<MiniGame />} />

        <Route path="/foods" element={<Foods />} />
        <Route path="/qna" element={<QnA />} />
        <Route path="/tourreview" element={<TourReview />} />
      </Routes>
    </>
  );
};

export default Router;
