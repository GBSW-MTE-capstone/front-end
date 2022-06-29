import React from "react";
import { Layout } from "../components/layout";
import QnaObject from "../components/qnaObject";
export const QnA = () => {
  const qna_style = {
    frame: {
      minHeight: "700px",
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
      height:"40px",
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
  return (
    <Layout>
      <div style={qna_style.frame}>
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
              <QnaObject id="1" title="asdf" date="2022-1-1" viewer="1" />
              <QnaObject id="2" title="asdf" date="2022-1-1" viewer="1" />
              <QnaObject id="3" title="asdf" date="2022-1-1" viewer="1" />
              <QnaObject id="4" title="asdf" date="2022-1-1" viewer="1" />
              <QnaObject id="5" title="asdf" date="2022-1-1" viewer="1" />
              <QnaObject id="6" title="asdf" date="2022-1-1" viewer="1" />
              <QnaObject id="7" title="asdf" date="2022-1-1" viewer="1" />
              <QnaObject id="8" title="asdf" date="2022-1-1" viewer="1" />
              <QnaObject id="9" title="asdf" date="2022-1-1" viewer="1" />
              <QnaObject id="10" title="asdf" date="2022-1-1" viewer="1" />
            </tbody>
          </table>
      </div>
    </Layout>
  );
};
