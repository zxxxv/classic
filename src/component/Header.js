import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setlogin, setloginstate } from "../store";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

let Header0 = styled.div`
    width: 100%;
    margin: auto;
    height: 45px;
    background-color: white;
    max-width: 1300px;
    display: flex;
    justify-content: space-between;
    min-width: 1300px;
    max-width: 1300px;
    a {
        text-decoration: none;
        color: black;
    }
`
let HeaderBar = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 100%;
    height: 45px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 1300px;
    box-shadow: 0px 1px 1px grey;
`
let Navbar_logo = styled.div`
    img {
        width: 180px;
        margin-left: 5px;
    }
`
let Navbar_menu = styled.ul`
    display: flex;
    list-style: none;
    margin-top: 7px;
    li {
        padding: 6px 14px;
    }
    li: hover {
        background-color: #E6E6FA;
        border-radius: 10px;
    }
`
let Navbar_login = styled.ul`
    display: flex;
    list-style: none;
    margin-right: 40px;
    margin-top: 7px;
    margin-bottom:7px;
    li {
        padding: 6px 12px;
        font-size: 15px;
    }
    li: hover {
        background-color: #F6D8CE;
        border-radius: 10px;
        cursor: pointer;
        transition: 0.3s;
    }
`
let Search = styled.input`
    border-radius: 20px;
    width: 250px;
    height: 30px;
    margin-left: 5px;
    padding: 6px 12px;
    margin-bottom: 20px;
    border: none;
    background-color: #F2F2F2;
    transition: 0.3s;
    : focus {
        outline: none;
        filter: drop-shadow(0 0 3px #8C3211) contrast(2) brightness(1);
        transition: 0.3s;
        width: 400px;
    }
`

function Header() {

    let loginstate = useSelector((state) => state.loginstate)
    let login = useSelector((state) => state.user)
    let dispatch = useDispatch()
    let navigate = useNavigate()

    let [search, setsearch] = useState('')

    let p = { id: 1, name: "재웅" }

    return (
        <>
            <HeaderBar>
                <Header0>
                    <Navbar_logo>
                        <a href="/"><img src="image.png" /></a>
                    </Navbar_logo>
                    <Navbar_menu>
                        {/* <li><a href='#'>사이트 소개</a></li>
                        <li><a href='#'>커뮤니티</a></li>
                        <li><a href='#'>매거진</a></li> */}
                        <Search placeholder="🍭검색하기" type={"search"} onChange={(e) => { setsearch(e.target.value) }} />
                    </Navbar_menu>
                    {/* {console.log(loginstate)} */}
                    <Navbar_login>
                        {
                            loginstate.log === false ?
                                <>
                                    <li><a onClick={() => {
                                        // axios.post('http://192.168.0.111:5000/post/')
                                        //     .then((res) => {console.log(res.data)})
                                        //     .catch((e) => {console.log(e)})
                                        dispatch(setloginstate(true))
                                        dispatch(setlogin(p))
                                        { console.log(login) }
                                        
                                    }}>로그인</a></li>
                                    <li><a>회원가입</a></li>
                                </>
                                :
                                <>
                                    <li><span onClick={() =>
                                        navigate('NewPost')
                                    }>✏️</span></li>
                                    <li><a onClick={() => {
                                        dispatch(setloginstate(false))
                                        dispatch(setlogin(null))
                                        { console.log(login) }
                                    }}>로그아웃</a></li>
                                </>
                        }
                    </Navbar_login>
                </Header0>
            </HeaderBar>
        </>
    )
}

export default Header;