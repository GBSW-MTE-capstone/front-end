import React from "react";
const FoodCard = (props) =>{
    const foods_card = {
        card:{
            boxShadow: "12px 12px 16px -2px rgba(0,0,0,0.3)",
            position: "relative",
            textAlign:"center",
            height:"350px",
            margin: '10px',
            borderRadius: '10px'
          },
          num:{
            position:"relative",
            display: "block",
            margin:"-25px auto",
            width: "40px",
            height: "40px",
            lineHeight: "40px",
            color:"#F9EBDE",
            backgroundColor:"#815854",
            textAlign:"center",
            borderRadius:"50%",
            fontSize: "16px"
          },
          title:{
            margin: '30px 0px 10px 0px',
            fontSize:"20px",
          },
          img: {
            objectFit: 'cover',
            height: '150px',
            borderRadius: '10px 10px 0px 0px'
          },
          content: {
            margin: '0px 10px 0px 10px'
          }
    }
    return(
        <div style={foods_card.card}>
            <p>
                <img
                style={foods_card.img}
                width="100%"
                src={props.link}
                alt={props.ex}
                />
            </p>
            <span style={foods_card.num}>{props.num}</span>
            <p style={foods_card.title}>{props.title}</p>
            <p style={foods_card.content}>{props.content}</p>
        </div>
    )
}
export default FoodCard
