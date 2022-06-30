import React from "react";
const ReviewCard = (props) => {
	const reviews_style = {
		col:{
			width:"300px",
			float: "left",
			padding: "15px"
		},
		card:{
			width:"300px",
			height:"auto",
			border:"1px solid #bbb",
			borderRadius:"3px"
		},
		img:{
			borderRadius:"2px 2px 0 0"
		},
		title:{
			padding:"0 0 0 15px",
			fontSize:"22px"
		},
		content:{
			margin:"5px 15px 15px 15px"
		},
		writer:{
			float:"right",
			padding:"5px 15px 0 0",
		}
	}
	return(
		<div style={reviews_style.col}>
			<div style={reviews_style.card}>
				<img style={reviews_style.img} width="100%" alt="hello" src={props.img}/>
				<p>
					<span style={reviews_style.title}>{props.title}</span>
					<span style={reviews_style.writer}>{props.writer} 님</span>
				</p>
				<p style={reviews_style.content}>
					{props.content}
				</p>
			</div>
		</div>
	)
}
export default ReviewCard