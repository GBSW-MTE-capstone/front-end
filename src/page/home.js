import { Layout } from "../components/layout";
import banner from "../assets/banner.png";
import UseongMapSVG from "../components/usengMapSVG";
import goGameBanner from "../assets/goGameBanner.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
// import { UseongMapImg } from "../components/mapData";
export const Home = () => {
  const data = null;
  const [imgId, setImgId] = useState(1);
  const [background, setBackground] = useState("./background/의성읍.png");
  const [modalAttr, setModalAttr] = useState("의성읍");

  useEffect(() => {
    setBackground(`./background/${modalAttr}.png`);
  }, [modalAttr]);

  return (
    <Layout>
      <img
        style={{ margin: "0" }}
        src={banner}
        className="banner"
        alt="banner"
      />
      <div className="UseongMap">
        <UseongMapSVG modalAttr={modalAttr} setModalAttr={setModalAttr} />
        <div className="infoMap">
          <h2>{modalAttr} 주요 관광지</h2>
          <ul>
            <li>경북소프트웨어고등학교</li>
            <li>조문국 박물관</li>
            <li>빙계 계곡</li>
          </ul>
        </div>
        <img src={background} alt="지역사진" />
      </div>
      <div className="bottomSection">
        <div>
          <div>축제 정보</div>
          <div>여행 후기</div>
        </div>
        <Link to={"/minigame"}>
          <img src={goGameBanner} />
        </Link>
      </div>
    </Layout>
  );
};
