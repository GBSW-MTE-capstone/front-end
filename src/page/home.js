import { Layout } from "../components/layout";
import banner from "../assets/banner.png";
import UseongMapSVG from "../components/usengMapSVG";
import { useState } from "react";
export const Home = () => {
  const [background, setBackground] = useState(
    "https://cdn.discordapp.com/attachments/915127755480375306/986925745005813840/d573ebf77f7cad0d.png"
  );
  const [modalAttr, setModalAttr] = useState({
    x: null,
    y: null,
    name: "의성읍",
  });
  return (
    <Layout>
      <div>
        <img src={banner} className="banner" alt="banner" />
      </div>
      <div className="UseongMap">
        <UseongMapSVG modalAttr={modalAttr} setModalAttr={setModalAttr} />
        <div className="infoMap">
          <h2>{modalAttr.name} 주요 관광지</h2>
        </div>
        <img src={background} />
      </div>
      <div>빼액</div>
    </Layout>
  );
};
