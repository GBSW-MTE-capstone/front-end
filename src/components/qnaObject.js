import React from "react";

const qnaObject = (props) => {
  const qna_object_style = {
    tr: {
      marginBottom:"5px",
      borderBottom: "1px solid #ddd",
      // transition: "all 0.2s",
      // "&:hover": {
      //   backgroundColor: "#fff"
      // },
      
    },
    td: {
      padding:"10px",
    }
  };

  return (
    <tr style={qna_object_style.tr} onClick={()=>{
      console.log(props.id)
    }} >
      <td style={qna_object_style.td}>{props.id}</td>
      <td style={qna_object_style.td}>{props.title}</td>
      <td style={qna_object_style.td}>{props.date}</td>
      <td style={qna_object_style.td}>{props.viewer}</td>
  </tr>
  );
};
export default qnaObject;
