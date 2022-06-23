import React from "react";
import { Layout } from "../components/layout";
import QnaObject from "../components/qnaObject";
export const QnA = () => {
  const qna_style = {
    frame: {
      minHeight: "700px",
    },
    list: {
      borderRadius: "7px 7px 0 0",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "100px",
      maxWidth: "1300px",
    },
  };
  return (
    <Layout>
      <div style={qna_style.frame}>
        <div style={qna_style.list}>
          <QnaObject title="titleTest!" date="2005-01-01" viewer="10" />
          <QnaObject title="titleTest!" date="2005-01-01" viewer="10" />
        </div>
      </div>
    </Layout>
  );
};
