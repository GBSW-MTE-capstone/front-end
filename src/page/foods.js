import React from "react";
import { Layout } from "../components/layout";
import FoodCard from "../components/foodCard.js";
export const Foods = () => {
  const foods_style = {
    frame:{
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "80px",
      maxWidth: "1300px",
      minWidth: "400px",
    },
    row:{
      backgroundColor:"#000",
    },
    col:{
      width:"330px",
      float: "left",
      padding: "10px"
    },
  }
  return (
    <Layout>
      <img src="https://cdn.discordapp.com/attachments/915127755480375306/996950024254672996/d30da80cd6b5b085.png" alt="banner" />
      <div style={foods_style.frame}>
        <h1># 의성군의 특산품들</h1>
        <div style={foods_style.row}>
          <div style={foods_style.col}>
            <FoodCard num="01" ex="마늘" title="의성마늘" content="고품질의 한지 마늘로서 전국 1위의 생산량을 자랑하고 있다." link="https://cdn.discordapp.com/attachments/830037211121844224/991521555345584158/992CDC365F2F506C19.png" />
          </div>
          
          <div style={foods_style.col}>
            <FoodCard num="02" ex="쌀" title="쌀" content="깨끗한 자연환경에서 유기빌 비료를 사용하여 친환경으로 재배한 고품질의 우수한 쌀이다" link="https://cdn.discordapp.com/attachments/830037211121844224/991521555345584158/992CDC365F2F506C19.png" />
          </div>

          <div style={foods_style.col}>
            <FoodCard num="03" ex="사과" title="사과" content="일조량이 풍부하여 껍질이 얇고 단단하면서 과즙이 많아 맛과 향이 좋으며, 당도가 높고 특히 비타민 C가 풍부하다" link="https://cdn.discordapp.com/attachments/830037211121844224/991521555345584158/992CDC365F2F506C19.png" />
          </div>
        </div>

        <div style={foods_style.row}>
          <div style={foods_style.col}>
            <FoodCard num="04" ex="고추" title="고추" content="30년의 전통인 고추 멀칭 재배는 영양가가 높고 고춧가루의 빛깔이 고와서 김치와 고추장용으로 적합하다" link="https://cdn.discordapp.com/attachments/830037211121844224/991521555345584158/992CDC365F2F506C19.png" />
          </div>
          
          <div style={foods_style.col}>
            <FoodCard num="05" ex="자두" title="자두" content="전국 생산량 1위를 자랑하는 의성자두는 당도가 높으며, 열매가 굵고 과육이 단단합니다." link="https://cdn.discordapp.com/attachments/830037211121844224/991521555345584158/992CDC365F2F506C19.png" />
          </div>

          <div style={foods_style.col}>
            <FoodCard num="06" ex="복숭아" title="복숭아" content="각종 미네랄이 풍부한 토양에서 재배되어 당도가 높고, 착색이 뛰어나며 복숭아 특유의 향기가 뛰어납니다." link="https://cdn.discordapp.com/attachments/830037211121844224/991521555345584158/992CDC365F2F506C19.png" />
          </div>
        </div>

        <div style={foods_style.row}>
          <div style={foods_style.col}>
            {/* <FoodCard num="04" ex="고추" title="고추" content="30년의 전통인 고추 멀칭 재배는 영양가가 높고 고춧가루의 빛깔이 고와서 김치와 고추장용으로 적합하다" link="https://cdn.discordapp.com/attachments/830037211121844224/991521555345584158/992CDC365F2F506C19.png" /> */}
          </div>
          
          <div style={foods_style.col}>
            <FoodCard num="07" ex="흑마늘" title="흑마늘" content="고품질의 한지 마늘로서 전국 1위의 생산량을 자랑하고 있는 의성진마늘은 그 어느 지역의 마늘보다 우수한 성분의 마늘." link="https://cdn.discordapp.com/attachments/830037211121844224/991521555345584158/992CDC365F2F506C19.png" />
          </div>

          <div style={foods_style.col}>
            {/* <FoodCard num="06" ex="복숭아" title="복숭아" content="각종 미네랄이 풍부한 토양에서 재배되어 당도가 높고, 착색이 뛰어나며 복숭아 특유의 향기가 뛰어납니다." link="https://cdn.discordapp.com/attachments/830037211121844224/991521555345584158/992CDC365F2F506C19.png" /> */}
          </div>
        </div>
        
      </div>
    </Layout>
  );
};
