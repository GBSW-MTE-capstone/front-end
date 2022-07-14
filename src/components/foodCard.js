import React from "react";
const FoodCard = (props) =>{
    const foods_card = {
        card:{
            border: "1px solid #ccc",
            position: "relative",
            padding: "10px",
            textAlign:"center",
            height:"350px"
          },
          num:{
            position:"relative",
            display: "block",
            margin:"10px auto",
            width: "34px",
            height: "34px",
            lineHeight: "34px",
            color:"#fff",
            backgroundColor:"#3079C2",
            textAlign:"center",
            borderRadius:"50%",
            fontSize: "11px"
          },
          line:{
            zIndex:"-1",
            content: "",
            position: "relative",
            width: "100%",
            left: "0",
            top: "-27px",
            borderBottom: "1px dashed #ccc",
          },
          title:{
            fontSize:"20px",
          }
    }
    return(
        <div style={foods_card.card}>
            <p>
                <img
                width="100%"
                src={props.link}
                alt={props.ex}
                />
            </p>
            <span style={foods_card.num}>{props.num}</span>
            <p style={foods_card.line}/>
            <p style={foods_card.title}>{props.title}</p>
            <p>{props.content}</p>
        </div>
    )
}
export default FoodCard