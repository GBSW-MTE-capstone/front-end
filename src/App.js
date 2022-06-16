import { Route, Routes } from "react-router-dom";
import { JomungukMuseum } from "./page/tourDetails/jomunguk";
import { Home } from "./page/home";
import "./style/index.scss";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tour/jomungukMuseum" element={<JomungukMuseum />} />
      </Routes>
    </>
  );
};

export default App;
