import { Layout } from "../components/layout"
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useEffect, useState } from "react";
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.core.css"
import "react-quill/dist/quill.snow.css"
export const TourReviewEdit = () => {
    const [text, setText] = useState()
    useEffect(() => {
      console.log(text)
    
    }, [text])
    
    function onChange(e) {
        
        setText(e)
    }
    return (
        <Layout>
            <img src="https://cdn.discordapp.com/attachments/915127755480375306/996950020932784139/d87f23e13081974f.png"></img>
            <div>
                <input type={"text"} placeholder="제목" name="title" />
                <ReactQuill theme="snow" onChange={onChange} />
            </div>

        </Layout>
    )
}