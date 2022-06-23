import React from "react";

const qnaObject = (props) => {
  const qna_object_style = {
    block: {
      height: "50px",
      borderBottom: "1px solid #000",
      backgroundColor: "#ccc",
    },
  };
  return (
    <div style={qna_object_style.block}>
      <span>{props.title}</span>
      <span>{props.date}</span>
      <span>{props.viewer}</span>
    </div>
  );
};
export default qnaObject;
