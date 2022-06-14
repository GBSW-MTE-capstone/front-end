import { Route, Routes } from "react-router-dom";
import { Home } from "./page/home";
import "./style/index.scss";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
