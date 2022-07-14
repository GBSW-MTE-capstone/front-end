import React from "react";
import { Layout } from "../components/layout";
import ReviewCard from "../components/reviewCard"
export const TourReview = () => {
  const review_style = {
    frame:{
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "80px",
      width: "991px",
    },
    background:{
      width: "100%",

    }
  }
  return (
    <Layout>
      <img style={review_style.background} src="https://cdn.discordapp.com/attachments/907969489533018112/996930639842529330/travel1.jpg"></img>
      <div style={review_style.frame}>
        <ReviewCard writer="임태현" title="hello" content="내용이 머죠" img="http://ojsfile.ohmynews.com/STD_IMG_FILE/2021/1023/IE002885862_STD.jpg" />
        <ReviewCard writer="주호민" title="hello" content="내용이란껀 말이쫑~" img="https://t1.daumcdn.net/cfile/tistory/220ACD49543246531D" />
        <ReviewCard writer="임태현" title="hello" content="내용이 머죠" img="http://ojsfile.ohmynews.com/STD_IMG_FILE/2021/1023/IE002885862_STD.jpg" />
        <ReviewCard writer="주호민" title="hello" content="내용이란껀 말이쫑~" img="https://t1.daumcdn.net/cfile/tistory/220ACD49543246531D" />
        <ReviewCard writer="임태현" title="hello" content="내용이 머죠" img="http://ojsfile.ohmynews.com/STD_IMG_FILE/2021/1023/IE002885862_STD.jpg" />
        <ReviewCard writer="임태현" title="hello" content="내용이 머죠" img="http://ojsfile.ohmynews.com/STD_IMG_FILE/2021/1023/IE002885862_STD.jpg" />
        
      </div>
    </Layout>
  );
};
