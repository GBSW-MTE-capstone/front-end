import { Route, Routes } from "react-router-dom";
import { JomungukMuseum } from "./page/tourDetails/jomunguk";
import { Home } from "./page/home";
import "./style/index.scss";
import { Tour } from "./page/tour";
import { Event } from "./page/event";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/event" element={<Event />} />
        <Route path="/tour/jomungukMuseum" element={<JomungukMuseum />} />
      </Routes>
    </>
  );
};

export default App;
