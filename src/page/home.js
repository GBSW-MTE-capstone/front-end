import { Layout } from "../components/layout";
import banner from "../assets/banner.png";
import UseongMapSVG from "../components/usengMapSVG";
import { useState } from "react";
import { useEffect } from "react";
import conrnusFruitPark from "../assets/ranking/cornusFruitPark.png"
import foresttrip from "../assets/ranking/foresttrip.png"
import moonpark from "../assets/ranking/moonpark.png"
import { AnimatePresence, motion } from "framer-motion";
// import { UseongMapImg } from "../components/mapData";
export const Home = () => {
  const [background, setBackground] = useState("./background/의성읍.png");
  const [modalAttr, setModalAttr] = useState("의성읍");

  useEffect(() => {
      setBackground(`./background/${modalAttr}.png`);
  }, [modalAttr]);

  const data2 = {
    "의성읍" : [<li>구봉공원</li>,<li>제월아트체험센터</li>,<li>의성마늘테마파크</li>,<li>의성컬링센터</li>,<li>의성문소루</li>],
    "금성면" : [<li>조문국 박물관</li>,<li>조문국 사적지</li>,<li>탑리마을</li>,<li>산운마을</li>,<li>산운생태공원</li>,<li>금마늘다목적센터</li>,<li>의성바람꽃농원</li>],
    "단촌면" : [<li>최치원문화관</li>,<li>고운사</li>],
    "춘산면" : [<li>춘산면</li>],
    "봉양면" : [<li>탑산약수온천</li>,<li>의성해피데이 흑마늘카페</li>],
    "단밀면" : [<li>낙단보</li>],
    "점곡면" : [<li>사촌리 가로숲</li>,<li>사촌전통마을</li>,<li>사촌은행나무숲</li>],
    "다인면" : [<li>의성안전체험관</li>],
    "사곡면" : [<li>달빛공원</li>,<li>산수유마을</li>],
    "옥산면" : [<li>금봉자연휴양림</li>],
    "안계면" : [<li>낭만농부</li>,<li>비안향교</li>],
    "단북면" : [<li>한국전통창조박물관</li>],
    "금천면" : [<li>등록된 관광명소가 없습니다!</li>],
    "안사면" : [<li>등록된 관광명소가 없습니다!</li>],
    "비안면" : [<li>등록된 관광명소가 없습니다!</li>],
    "안평면" : [<li>등록된 관광명소가 없습니다!</li>],
    "가음면" : [<li>등록된 관광명소가 없습니다!</li>]
    
  }
  //console.log(data2[modalAttr]);
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
      <div style={{ height: "700px" }}></div>
      <div className="bannerCon">
        <div>
          <h2>Welcome to Uiseong</h2>
          <p>활력이 넘치는 지역. 의성에 어서 오세요!</p>
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
                src={moonpark}
                alt="달빛공원 랭킹"
                width="550px"
              />
              <div>
                <h2>I. 달빛공원</h2>
                <p className="rank">01</p>
                <p>은하수가 아름다운</p>
              </div>
            </div>
            <div>
              <div>
                <h2>II. 산수유마을</h2>
                <p className="rank">02</p>
                <p>노란물결이 가득한</p>
              </div>
              <img
                src={conrnusFruitPark}
                width="550px"
                alt="산수유마을 랭킹"
              />
            </div>
            <div>
              <img
                src={foresttrip}
                width="550px"
                alt="금봉자연휴양림랭킹"
              />
              <div>
                <h2>III. 금봉 자연 휴양림</h2>
                <p className="rank">03</p>
                <p>평화로운 자연과 함께</p>
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
                    <img src={item.thumnail} className="eventImg" alt={item.name} />
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
                {
                  data2[modalAttr]
                }
              </ul>
            </div>
            <AnimatePresence>
            <motion.img src={background} key={background} initial={{ opacity: 0.6 }} animate={{ opacity: 1 }} exit={{ opacity: 0.6 }} alt="지역사진" />
            </AnimatePresence>
          </div>
        </div>
        {/* <div>
          <h1>#4. 의성 여행 후기</h1>
        </div> */}
        
      </div>
    </Layout>
  );
};
