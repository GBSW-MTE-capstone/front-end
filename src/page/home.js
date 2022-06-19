import { Layout } from "../components/layout";
import banner from "../assets/banner.png";
import UseongMapSVG from "../components/usengMapSVG";
import backgroundImg from "../assets/sibal.jpg";
import { useState } from "react";
export const Home = () => {
  const data = null;
  const [imgId, setImgId] = useState(1);
  const [background, setBackground] = useState(
    "https://cdn.discordapp.com/attachments/915127755480375306/986925745005813840/d573ebf77f7cad0d.png"
  );
  const [modalAttr, setModalAttr] = useState({
    name: "의성읍",
  });
  return (
    <Layout>
      <div>
        <img src={banner} className="banner" alt="banner" />
      </div>
      <div className="UseongMap">
        <UseongMapSVG
          setImgId={setImgId}
          modalAttr={modalAttr}
          setModalAttr={setModalAttr}
        />
        <div className="infoMap">
          <h2>{modalAttr.name} 주요 관광지</h2>
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
        <div>의성 지수 게임</div>
      </div>
    </Layout>
  );
};
