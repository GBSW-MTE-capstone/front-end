import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components/layout";
import QnaObject from "../components/qnaObject";
export const QnA = () => {
  const qna_style = {
    frame: {
      minHeight: "600px",
      width: "fit-content",
      display:"block",
      margin: "0 auto"
    },
    list: {
      borderCollapse:"collapse",
      
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "80px",
      maxWidth: "1300px",
      minWidth: "1000px",
      textAlign:"center"
    },
    list_head:{
      borderBottom:"1px solid",
    },
    qna_id:{
      width:"10%"
    },
    qna_title:{
      width:"60%"
    },
    qna_date:{
      width:"20%"
    },
    qna_viewer:{
      width:"10% "
    }
  };

  const data = {
    success : true,
    data : [
      {
        id : 1,
        title : "asdf",
        date : "2022-1-1",
        viewer : 1
      },
      {
        id : 2,
        title : "asdf",
        date : "2022-1-1",
        viewer : 1
      },
      {
        id : 3,
        title : "asdf",
        date : "2022-1-1",
        viewer : 1
      },
      {
        id : 4,
        title : "asdf",
        date : "2022-1-1",
        viewer : 1
      },
      {
        id : 5,
        title : "asdf",
        date : "2022-1-1",
        viewer : 1
      },
      {
        id : 6,
        title : "asdf",
        date : "2022-1-1",
        viewer : 1
      },
      {
        id : 7,
        title : "asdf",
        date : "2022-1-1",
        viewer : 1
      },
      {
        id : 8,
        title : "asdf",
        date : "2022-1-1",
        viewer : 1
      },
    ]     
  }
  return (
    <Layout>
      <img src="https://cdn.discordapp.com/attachments/915127755480375306/996950031951208448/QA.png" alt="banner" />
      <div style={qna_style.frame}>
        <Link to="/qnaedit" className="goqnaedit"><button>QnA 글쓰기</button></Link>
          <table style={qna_style.list}>
            <thead style={qna_style.list_head}>
              <tr>
                <th style={qna_style.qna_id}>글번호</th>
                <th style={qna_style.qna_title}>제목</th>
                <th style={qna_style.qna_date}>등록일</th>
                <th style={qna_style.qna_viewer}>조회수</th>
              </tr>
            </thead>
            <tbody>
              {data.success ? data.data.map(item => {
                return (
                  <QnaObject key={item.id} id={item.id} title={item.title} date={item.date} viewer={item.viewer} />
                )
              }) : <>asd</>}
            </tbody>
          </table>
      </div>
    </Layout>
  );
};
