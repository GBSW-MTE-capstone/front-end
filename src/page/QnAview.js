import React from "react";
import { Layout } from "../components/layout";
import { Link } from "react-router-dom";
export const QnAview = (param) => {
    const viewer={
        frame: {
            minHeight: "600px",
            maxWidth: "900px",
            display:"block",
            // margin: "0 auto",
            margin:"200px auto auto",
            textAlign:"center"
        },
        top: {
            width: "100%",
        },
        id:{
            padding: "0 40px 0 40px",
            fontSize: "22px"
        },
        date:{
            padding: "0 40px 0 40px"
        }
    }
    return(
        <Layout>
            <div style={viewer.frame}>
                <div style={viewer.top}>
                    <span style={viewer.id}>아이디 너어용</span>
                    <span style={viewer.date}>2022-2-22</span>
                </div>
                <hr/><br/>
                {/* p 안에 내용 들어가용 */}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,</p>
                <br/><br/>
                <Link to="/qna" className="goqnaedit"><button>돌아가기</button></Link>
                {/* 부트스트랩 쓰거나 해주세용 */}
            {/* 미안타 오늘 졸리다 */}
            </div>
        </Layout>
    )
}