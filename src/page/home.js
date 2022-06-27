import { Layout } from "../components/layout";
import banner from "../assets/banner.png";
import UseongMapSVG from "../components/usengMapSVG";
import goGameBanner from "../assets/goGameBanner.png";
import { useState, useTransition } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
// import { UseongMapImg } from "../components/mapData";
export const Home = () => {
  const [ispending, startTransition] = useTransition(10000);
  const [background, setBackground] = useState("./background/의성읍.png");
  const [modalAttr, setModalAttr] = useState("의성읍");

  useEffect(() => {
    startTransition(() => {
      setBackground(`./background/${modalAttr}.png`);
    });
  }, [modalAttr]);

  const sampleData = {
    success: true, //or false
    data: [
      {
        id: 1,
        name: "의성슈퍼푸드마늘축제",
        desc: "마늘이 조아",
        date: "2022-10-03",
        thumnail:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXUgRHxLKuG3_EUYsVSjvX1bRttw5kd9nPoQ&usqp=CAU",
      },
      {
        id: 2,
        name: "의성세계하늘축제",
        desc: "마늘이 조아",
        date: "2022-10-03",
        thumnail:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-okhlrWS_mWUpt18Nydx3gXn7X2vJT4KkeA&usqp=CAU",
      },
      {
        id: 3,
        name: "산수유마을 꽃마을행사",
        desc: "마늘이 조아",
        date: "2022-10-03",
        thumnail:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRibl3ZzZy5zLdvzYfmK3edKLjjI9AYVQ3A9A&usqp=CAU",
      },
    ],
  };

  return (
    <Layout>
      <div style={{ height: "701px" }}></div>
      <div className="bannerCon">
        <div>
          <h2>Welcome to Uiseong</h2>
          <p>의성에 어서 오세요.</p>
        </div>
        <img src={banner} alt="달빛공원" />
      </div>
      <div className="homeSection">
        <div>
          <h1>#1. 의성의 관광 명소 </h1>
          {/* NO.1 달빛공원
            <div>NO.2 탑산약수온천, NO.산수유마을</div> */}
          <div className="ranking">
            <div>
              <img
                src="http://tong.visitkorea.or.kr/cms/resource/48/2738348_image2_1.jpg"
                width="550px"
              />
              <div>
                <h2>I. 달빛공원</h2>
              </div>
            </div>
            <div>
              <div>
                <h2>II. 산수유마을</h2>
              </div>
              <img
                src="http://tong.visitkorea.or.kr/cms/resource/48/2738348_image2_1.jpg"
                width="550px"
              />
            </div>
            <div>
              <img
                src="http://tong.visitkorea.or.kr/cms/resource/48/2738348_image2_1.jpg"
                width="550px"
              />
              <div>
                <h2>III. 금봉 자연 휴양림</h2>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1>#2. 의성의 축제</h1>
          <div className="homeEvent">
            {sampleData.success ? (
              sampleData.data.map((item) => {
                return (
                  <div key={item.id} className="eventList">
                    <img src={item.thumnail} width="300px" />
                    <div>
                      <h2>제목 : {item.name}</h2>
                      <p>일시 : {item.date}</p>
                    </div>
                  </div>
                );
              })
            ) : (
              <></>
            )}
          </div>
        </div>
        <div>
          <h1>#3. 의성 구석구석!</h1>
          <div className="UseongMap">
            <UseongMapSVG modalAttr={modalAttr} setModalAttr={setModalAttr} />
            <div className="infoMap">
              <h2>{modalAttr}의 관광명소</h2>
              <ul>
                <li>경북소프트웨어고등학교</li>
                <li>조문국 박물관</li>
                <li>빙계 계곡</li>
              </ul>
            </div>
            <img src={background} alt="지역사진" />
          </div>
        </div>
        <div>
          <h1>#4. 여행 후기</h1>
        </div>
      </div>
    </Layout>
  );
};
