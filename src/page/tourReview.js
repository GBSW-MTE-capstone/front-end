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
  const data = {
    success : true,
    data : [
      {
        writer : "뽀라",
        title : "6월의 경북 의성 여행",
        content : "6월에 어느 더운 날 경북 의성 으로 당일치기 여행 을 다녀왔어요 (대전 출발) 마스크 써서 더 덥기도 했던.. 그 어느 날의 여행 이야기입니다 원래는 작약을 보러 가고 싶은 마음도 있었는데, 이미 늦어버린 6월이었죠! 그래도 상관없이 가게 했던 것은 넓게 펼쳐진 조문국사적지와 공룡발자국 때문이...",
        img : "https://blogthumb.pstatic.net/MjAyMDEyMDhfMTQ2/MDAxNjA3NDMwNzE4NjQ4.s0ir3SlDxle9cEH5CsgBg_5Tu1BzU6Aj5v-RyTpjuZYg.7xOr0Rgge0O5yVOybwp6oH159KsCgEExujCb4-no9Xgg.JPEG.jinyou0819/20200606_132642.jpg?type=s2"
      },
      {
        writer : "지",
        title : "의성여행 - 조문국사적지, 빙계계곡, 빙혈, 의성컬링장, 캠핑용품점까지 핫플만 샤샤샥... ",
        content : "인생샷 쌉가넝 ~~^^* 요즘 의성여행 굉장히 핫하던데 조문국사적지 꼭 가주세요 ...! 포토존에서도 한 컷 은 꼭 해줘야해 ... 날이 너무너무 더운데 조문국사적지에는 그늘이 별로 없어서 더워하다가 결국 경덕왕릉에는 가보지도 못했어요 흑흑 .. 너무 더우면? 시원한 곳을 가면 됩니다 희희 얼음동굴... ",
        img : "https://blogthumb.pstatic.net/MjAyMDA2MDZfNDUg/MDAxNTkxNDUxNDExNjg1.duDTSf5LTbNbA1afFgpwZWwhBkS0_0p_vPEowG87M3sg.egSj7golaTK7MaIZynJ4oFS26U3LLQN2oPj2U_idwVMg.JPEG.csm03098/IMG_7044.JPG"
      }
    ]
  }
  return (
    <Layout>
      <img style={review_style.background} src="https://cdn.discordapp.com/attachments/915127755480375306/996950020932784139/d87f23e13081974f.png"></img>
      <div style={review_style.frame}>
        {data.success ? data.data.map(item => {
          return (
            <ReviewCard writer={item.writer} title={item.title} content={item.content} img={item.img} />
          )
        }): <></>}
        
        
      </div>
    </Layout>
  );
};
