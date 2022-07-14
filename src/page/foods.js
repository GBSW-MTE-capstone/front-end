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
            <FoodCard num="01" ex="치킨" title="의성마늘치킨" content="치킨에 마늘소스를 추가해 풍미를 더하다" link="https://cdn.discordapp.com/attachments/830037211121844224/991521555345584158/992CDC365F2F506C19.png" />
          </div>
          
          <div style={foods_style.col}>
          <FoodCard num="02" ex="치킨" title="유해진씨" content="뭐해유?" link="https://cdn.discordapp.com/attachments/830037211121844224/991521555345584158/992CDC365F2F506C19.png" />
          </div>
          <div style={foods_style.col}>
            <FoodCard/>
          </div>
        </div>

        <div style={foods_style.row}>
          <div style={foods_style.col}>
            <FoodCard/>
          </div>
          
          <div style={foods_style.col}>
           <FoodCard/>
          </div>
          <div style={foods_style.col}>
            <FoodCard/>
          </div>
        </div>
      </div>
    </Layout>
  );
};
