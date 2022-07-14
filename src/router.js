import { Route, Routes } from "react-router-dom";
import { Home } from "./page/home";
import "./style/index.scss";
import { Tour } from "./page/tour";
import { Event } from "./page/event";
import { MiniGame } from "./page/miniGame";
import { Foods } from "./page/foods";
import { QnA } from "./page/QnA";
import { TourReview } from "./page/tourReview";
import { TourReviewEdit } from "./page/tourReviewEdit";
import { QnAEdit } from "./page/QnAEdit";
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
        <Route path="/qnaedit" element={<QnAEdit/>} />
        <Route path="/tourreview" element={<TourReview />} />
        <Route path="/tourreviewedit" element={<TourReviewEdit/>} />
      </Routes>
    </>
  );
};

export default Router;
