import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setboard } from "../store";
import { useState } from 'react';
import Second from './Second';
import { Routes, Route, useNavigate } from "react-router-dom";
import Post from "./Post";
import { useEffect } from 'react'
import axios from 'axios'

let First1 = styled.div`
    position: fixed;
    text-align: center;
    display: inline-block
    // border: 1px solid black;
    p {
        text-decoration: none;
        margin: 2px;
        padding-left: 20px;
        padding-top: 3px;
        display: inline-block
        padding-bottom: 3px;
    }
    p : hover{
        background-color: white;
        color: black;
        transition: 0.3s;
    }
`
let First2 = styled.div`
    width: 20%;
`
let Item = styled.div`
    width: 150px;
    height: 20px;
    padding: 3px;
    font-size: 14px;
    color: black;
    margin-left: 10px;
    item-align: right;
    border-radius: 8px;
    cursor: pointer;
`
let ItemC = styled.div`
    width: 150px;
    height: 20px;
    padding: 3px;
    background-color: white;
    font-size: 14px;
    color: black;
    margin-left: 10px;
    item-align: right;
    border-radius: 8px;
    cursor: pointer;
`
// 🎸🪕🎻📯🥁🪘🎷🪗🎺
function First() {

    let [category] = useState(['🎨전체', '🧸인사이트', '🎼연주영상', '🎧연습영상', '👒일상 글', '✨공연 정보', '🪃여러 소식'])
    let [categoryE] = useState(['Category=0', 'Category=1', 'Category=2', 'Category=3', 'Category=4', 'Category=5', 'Category=6'])
    let [btnActive, setBtnActive] = useState(0);

    let navigate = useNavigate();
    let dispatch = useDispatch();
    let board = useSelector((state) => state.board)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_LOCAL_URL}/post/getPostInfo?category=0&page=1`)
            .then((res) => {
                // console.log(res.data.data)
                dispatch(setboard(res.data.data))
                console.log(res.data.data)
            })
            .catch((e) => { console.log(e) })
    }, [])

    return (
        <>
            <First1>
                {
                    category.map((a, i) => {
                        return (
                            <>
                                {
                                    i === btnActive ?
                                        <p key={i}><ItemC
                                            onClick={() => {
                                                navigate(categoryE[i]);
                                                setBtnActive(i);
                                                axios.get(`${process.env.REACT_APP_LOCAL_URL}/post/getPostInfo?category=${i}&page=1`)
                                                    .then((res) => {
                                                        // console.log(res.data.data)
                                                        dispatch(setboard(res.data.data))
                                                        // console.log(board)
                                                    })
                                                    .catch((e) => { console.log(e) })
                                            }}
                                        >{a}</ItemC></p>
                                        :
                                        <p key={i}><Item
                                            onClick={() => {
                                                navigate(categoryE[i]);
                                                setBtnActive(i);
                                                axios.get(`${process.env.REACT_APP_LOCAL_URL}/post/getPostInfo?category=${i}&page=1`)
                                                    .then((res) => {
                                                        // console.log(res.data.data)
                                                        dispatch(setboard(res.data.data))
                                                        // console.log(board)
                                                    })
                                                    .catch((e) => { console.log(e) })
                                            }}
                                        >{a}</Item></p>
                                }
                            </>
                        )
                    })
                }
            </First1>
            <First2 />
            <Routes>
                <Route path="/" element={<Second category={category[0]} />} />
                <Route path="/Category=0" element={<Second category={category[0]} />} />
                <Route path="/Category=1" element={<Second category={category[1]} />} />
                <Route path="/Category=2" element={<Second category={category[2]} />} />
                <Route path="/Category=3" element={<Second category={category[3]} />} />
                <Route path="/Category=4" element={<Second category={category[4]} />} />
                <Route path="/Category=5" element={<Second category={category[5]} />} />
                <Route path="/Category=6" element={<Second category={category[6]} />} />
                <Route path="/NewPost" element={<Post />} />
            </Routes>
        </>

    )
}

function TabButton() {
    return (
        <div></div>
    )
}

export default First;