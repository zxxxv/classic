import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { setboard } from "../store";
import Time from './time'

let Second2 = styled.div`
    width: 53%;
    text-decoration: none;
    text-align: center;
    margin-bottom: 30px;
    // border: 1px solid black;
`
let Content = styled.div`
    width: 100%;
    margin-top: 10px;
    margin-bottom: 35px;
`
let Content_I = styled.div`
    width: 6%;
    border-radius: 100px;
    background-color: white;
    overflow: hidden;
    : hover {
        filter: drop-shadow(0 0 3px #261917) contrast(2) brightness(2);
        transition: 0.3s;
        cursor: pointer;
    }
`
let Content_W = styled.div`
    color: black;
    width: 100%
    margin-left: 0px;
    P {
        text-align: left;
        font-size: 14px;
        margin: 0px;
        padding-left: 5px;
    }
`
let Content_WD = styled.div`
    color: 	grey;
    width: 100%
    margin-left: 0px;
    P {
        text-align: left;
        font-size: 12px;
        margin: 0px;
        padding-left: 5px;
    }
`
let Content_T = styled.div`
    color: black;
    font-size: 23px;
    text-align: left;
    margin: 10px;
    margin-bottom: 0px;
    p {
        margin: 5px;
    }
`
let Content_C = styled.div`
    color: black;
    text-align: left;
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 10px;
    font-size: 15px;
    line_height: 30px;
    p{  
        line-height: 150%;
        margin-top: 0px;
    }
`
let Content_top = styled.div`
    display: flex;
    margin-left: 5px;
`
let Content_bot = styled.div`
    background-color: white;
    height: 100%;
    border-radius: 20px;
    margin-left: 25px;
    margin-top: 15px;
    margin-right: 25px;
    : hover {
        box-shadow: 5px 5px 15px #D8D8D8;
        margin-top: 13px;
        transition: 0.3s;
        cursor: pointer;
    }
`
let Content_M = styled.div`
    display: flex;
    span {
        font-size: 12px;
        margin-left: 15px;
        margin-bottom: 10px;
        background-color: #F2F2F2;
        border-radius: 15px;
        padding: 3px;
        padding-right: 5px;
        padding-left: 5px;
        a{
            text-decoration: none;
        }
    }
`
let Content_Tag = styled.div`
    display: flex;
    p { 
        color: red;
        font-size: 12px;
        margin-left: 15px;
        margin-top: 15px;
        margin-bottom: 0px;
        background-color: #F6D8CE;
        border-radius: 15px;
        padding: 4px;
        padding-left: 8px;
        padding-right: 8px;
    }
`
let Like0 = styled.span`
    margin-top: 15px;
    margin-bottom: 0px;
    display: flex;
    border: 1px dashed grey;
    border-radius: 15px;
    padding-legt: 5px;
    padding-right: 5px;
    : hover {
        filter: drop-shadow(0 0 3px #261917) contrast(2) brightness(2);
        transition: 0.3s;
        cursor: pointer
    }
`
let Tag_box = styled.div`
    width: 92%;
    display: flex;
`

function Second(props) {

    let board = useSelector((state) => state.board)
    let login = useSelector((state) => state.login)
    let [like, setlike] = useState([{}]);

    return (
        <Second2>
            <p>{props.category}</p>
            {
                board === null ? <div></div>
                    :
                    board.map((a, i) => {
                        return (
                            <Content key={i}>
                                {/* {console.log(board)} */}
                                <Content_top>
                                    <Content_I onClick={() => {
                                        console.log('a')
                                    }}></Content_I>
                                    <div style={{ width: '100%' }}>
                                        <Content_W><p>{a.WRITER_NAME}</p></Content_W>
                                        <div style={{ display: 'flex' }}>
                                            <Content_WD><p>애호가</p></Content_WD>
                                            <Time date={a.UPDATED_AT}><p>&#124;</p></Time>
                                        </div>
                                    </div>
                                </Content_top>
                                <Content_bot>
                                    <div style={{ display: 'flex' }}>
                                        <Tag_box>
                                            {/* <Content_Tag><p>&#32;# 가사&#32;</p></Content_Tag> */}
                                        </Tag_box>
                                        {
                                            a.POST_ID === null
                                            ?
                                            <Like0 onClick={() => {
                                                axios.post(`${process.env.REACT_APP_LOCAL_URL}/post/likePost`,
                                                    { post_id: a.ID, user_id: login.user.id, like: 1 })
                                                    .then((res) => { console.log(res.data) })
                                                    .catch((e) => { console.log(e) })
                                            }}>🤍 {a.LIKE_COUNT}</Like0>
                                            :
                                            <Like0 onClick={() => {
                                                axios.post(`${process.env.REACT_APP_LOCAL_URL}/post/likePost`,
                                                    { post_id: a.ID, user_id: login.user.id, like: 0 })
                                                    .then((res) => { console.log(res.data) })
                                                    .catch((e) => { console.log(e) })
                                            }}>❤️ {a.LIKE_COUNT}</Like0>
                                        }
                                    </div>
                                    <Content_T><p>{a.TITLE}</p></Content_T>
                                    <Content_C><p>{a.CONTENT}</p></Content_C>
                                    <Content_M>
                                        {/* <span>피아노</span> */}
                                        <span>댓글 {a.COMMENT_COUNT}</span>
                                        <span onClick={() => {
                                            axios.post(`${process.env.REACT_APP_LOCAL_URL}/post/deletePost`,
                                                { post_id: a.ID })
                                                .then((res) => { console.log(res.data) })
                                                .catch((e) => { console.log(e) })
                                        }}><a href="/">삭제</a></span>

                                        {/* <span>조회수 0</span> */}
                                    </Content_M>
                                </Content_bot>
                            </Content>
                        )
                    })
            }
            <Card />
            <Card />
        </Second2 >
    )
}

function Card() {

    let a = '아프다고 말하면 정말 아플 것 같아서 슬프다고 말하면 눈물이 날 것 같아서 그냥 웃지 그냥 웃지 그냥 웃지 그런데 사람들이 왜 우냐고 물어 매일을 울다가 웃다가 울다가 웃는걸 반복해 나 왜 이러는데 술이 술인지 밥인지도 모르는 채 살아 이 정도 아픔은 통과 의례인 듯 해 멍하니 종이에 나도 몰래 니 이름만 적어 하루 왠 종일 종이가 시커매지고서야 펜을 놔 너 그리워 또 핸드폰을 들었다 놔 눈물이 또 찾아와 너와의 이별이란 나는 심장이 없어 나는 심장이 없어 그래서 아픈 걸 느낄리 없어 매일 혼잣말을 해 내게 주문을 걸어 그래도 자꾸 눈물이 나는 걸 아프다고 말하면 정말 아플 것 같아서 슬프다고 말하면 눈물이 날 것 같아서 그냥 웃지 그냥 웃지 그냥 웃지 그런데 사람들이 왜 우냐고 물어 이렇게 웃는데 니가 떠나고부터 난 바보가 된 것 같어'
    let b = '심장이 없어'

    return (

        <Content>
            <Content_top>
                <Content_I onClick={() => {
                    console.log('a')
                }}></Content_I>
                <div style={{ width: '100%' }}>
                    <Content_W><p>에이트</p></Content_W>
                    <div style={{ display: 'flex' }}>
                        <Content_WD><p>가수</p></Content_WD>
                        <Content_WD><p>&#124; 1일전</p></Content_WD>
                    </div>
                </div>
            </Content_top>
            <Content_bot>
                <div style={{ display: 'flex' }}>
                    <Tag_box>
                        <Content_Tag><p>&#32;# 가사&#32;</p></Content_Tag>
                    </Tag_box>
                    <Like0>🤍 0</Like0>
                </div>
                <Content_T><p>{b}</p></Content_T>
                <Content_C><p>{a}</p></Content_C>
                <Content_M>
                    <span>피아노</span>
                    <span>댓글 0</span>
                    <span>조회수 0</span>
                </Content_M>
            </Content_bot>
        </Content>
    )
}

export default Second;