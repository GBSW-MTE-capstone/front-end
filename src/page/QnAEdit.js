import { Layout } from "../components/layout"
import { useEffect, useState } from "react";
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.core.css"
import "react-quill/dist/quill.snow.css"
export const QnAEdit = () => {
    const [formData, setForamData] = useState({
        title : "",
        content : ""
    })
    useEffect(() => {
      console.log(formData)
    
    }, [formData])
    
    function onChangeContent(e) {
        setForamData({
            ...formData,
            content : e
        })
    }

    function onChangeTitle(e) {
        setForamData({
            ...formData,
            title : e.target.value
        })
    }
    const submitFormData = () => {
        fetch('나도 모름 어디로 보내야함?', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
            })
            .then((response) => response.json())
            .then((data) => {
            console.log('성공:', data);
            })
            .catch((error) => {
            console.error('실패:', error);
        });
    }
    return (
        <Layout>
            <hr/>
            <div className="qnaEditContainer">
                <input type={"text"} placeholder="제목" name="title" onChange={onChangeTitle} />
                <ReactQuill data-gramm="true" theme="snow" onChange={onChangeContent} className="qnaEditor" placeholder="궁금한 것을 물어보세요!" />
                <button type="button">글쓰기</button>
            </div>
        </Layout>
    )
}