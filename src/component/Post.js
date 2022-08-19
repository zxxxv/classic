import styled from "styled-components";
import { useRef } from "react";
import ImgPreview from './ImgPreview';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { getValue } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

let Post0 = styled.div`
    width: 53%;
    text-decoration: none;
    text-align: center;
    // border: 1px solid black;
`
let Post_Top = styled.div`
    // border: 1px solid black;
`
let P1 = styled.p`
    font-size: 22px;
`
let P2 = styled.p`
    font-size: 15px;
`
let Post_Bot = styled.div`
    height: auto;

`
let Post_Box = styled.div`
    border-radius: 20px;
    border: 0.5px solid grey;
    height: auto;
`
let Upload = styled.div`
    width: 100px;
    height: 50px;
    border-radius: 15px;
    border: 0.5px solid red;
    margin: auto;
    margin-top: 35px;
    margin-bottom: 50px;
    font-size: 15px;
    : hover {
        cursor: pointer;
        color: black;
        background-color: #F2F2F2;
        filter: drop-shadow(0 0 5px #8C3211) contrast(1) brightness(1);
        transition: 0.25s;
    }
`
let Post_T = styled.div`
    p {
        text-align: left;
        margin-left: 35px;
        margin-bottom: 0px;
        margin-top: 35px;
    }
`
let Post_C = styled.div`
    p {
        text-align: left;
        margin-left: 35px;
        margin-bottom: 15px;
        margin-top: 35px;
    }
`
let T = styled.input`
    width: 90%;
    height: 20px;
    border-left-width: 0;
    border-right-width: 0;
    border-top-width: 0;
    border-bottom-width: 1px;
    background-color: #F2F2F2;
    outline: none;
`
let C = styled.textarea`
    width: 620px;
    height: 200px;
    border-left-width: 1px;
    max-width: 620px;
    min-width: 620px;
    min-height: 200px;
    border-right-width: 1px;
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-radius: 15px;
    background-color: #F2F2F2;
    outline: none;
    p {
        font-size: 15px;
    }
`
let Btn = styled.button`
    border-radius: 15px;
    background-color: white;
    cursor: pointer;
    border: 0.5px solid red;
    margin: 35px;
    : hover {
        color: black;
        background-color: #F2F2F2;
        filter: drop-shadow(0 0 5px #8C3211) contrast(1) brightness(1);
        transition: 0.25s;
    }
`
let Item = styled.div`
    background-color: white;
    border-radius: 15px;
    font-size: 12px;
    padding: 6px 6px;
    cursor: pointer;
    :hover{
        background-color: #F6D8CE;
        transition: 0.3s;
    }
`
let ItemC = styled.div`
    background-color: #F6D8CE;
    border-radius: 15px;
    font-size: 12px;
    padding: 6px 6px;
    cursor: pointer;
`
let Radio = styled.div`
    display: flex;
    
`
let T3 = styled.div`
    p {
        margin: 0px;
        margin-left: 35px;
        margin-top: 24px;
        margin-bottom: 0px;
    }
`

function Post() {

    let login = useSelector((state) => state.login)
    const a = { title: '', content: '', category: '', user_id: login.user, image_url: 'none', video_url: 'none' }
    let [category] = useState(['🧸인사이트', '🎼연주영상', '🎧연습영상', '👒일상 글', '✨공연 정보', '🪃여러 소식'])
    let [btnActive, setBtnActive] = useState(null);
    let navigate = useNavigate();

    const [board, setboard] = useState([])

    const [input, setinput] = useState([
        {
            title: '',
            content: '',
        },
    ]);

    const { title, content } = input;

    const onChange = (e) => {
        const { value, name } = e.target;
        setinput({
            ...input,
            [name]: value
        })
    }

    return (
        <>
            <Post0>
                <form>
                    {/* {console.log(login)} */}
                    <Post_Top>
                        <P1>글 작성하기</P1>
                        <P2>주어진 형식에 맞게 작성해주세요</P2>
                    </Post_Top>
                    <Post_Bot>
                        <Post_Box>
                            <Post_T>
                                <div><p>글제목*</p></div>
                                <T name="title" onChange={onChange} value={title || ''} />
                            </Post_T>
                            <Post_C>
                                <div><p>내용*</p></div>
                                <C cols="90" rows="10" name="content" onChange={onChange} value={content || ''}><p></p></C>
                                {/* <ImageBtn /> */}
                                <T3><p>카테고리</p></T3>
                                <Radio>
                                    {
                                        category.map((a, i) => {
                                            return (
                                                <>
                                                    {
                                                        i === btnActive ?
                                                            <p key={i}><ItemC
                                                                onClick={() => { setBtnActive(i) }}
                                                            >{a}</ItemC></p>
                                                            :
                                                            <p key={i}><Item
                                                                onClick={() => { setBtnActive(i); }}
                                                            >{a}</Item></p>
                                                    }
                                                </>
                                            )
                                        })
                                    }
                                </Radio>
                                {/* <Uploader/> */}
                                <ImgPreview />
                            </Post_C>
                        </Post_Box>
                        <Upload onClick={() => {
                            axios.post(`${process.env.REACT_APP_LOCAL_URL}/post/uploadPost`,
                                { title: input.title, content: input.content, category: btnActive+1, user_id: login.user.id, image_url: 'none', video_url: 'none' })
                                .then((res) => { console.log(res.data) })
                                .catch((e) => { console.log(e) })
                            // console.log({ title: input.title, content: input.content, category: btnActive+1, user_id: login.user.id, image_url: 'none', video_url: 'none' })
                            navigate(-1)
                        }}><p>업로드</p></Upload>

                    </Post_Bot>
                </form>
            </Post0>
        </>
    )
}

const ImageBtn = () => {
    // useRef를 이용해 input태그에 접근한다.
    const imageInput = useRef();

    // 버튼클릭시 input태그에 클릭이벤트를 걸어준다. 
    const onCickImageUpload = () => {
        imageInput.current.click();
    };

    // input태그는 display:"none" 을 이용해 안보이게 숨겨준다.
    return (
        <>
            <input type="file" style={{ display: "none" }} ref={imageInput} accept='.gif, .jpg, .png' />
            <Btn onClick={onCickImageUpload}>이미지업로드</Btn>
        </>
    );
};

export default Post